const { algoliasearch, instantsearch } = window;
const { autocomplete } = window["@algolia/autocomplete-js"];
const { createLocalStorageRecentSearchesPlugin } = window["@algolia/autocomplete-plugin-recent-searches"];
const { createQuerySuggestionsPlugin } = window["@algolia/autocomplete-plugin-query-suggestions"];
const searchClient = algoliasearch("RISKBWIG7Q", "ab896c38ffd7f04c6d6ce975deb6cb0f");
const search = instantsearch({
    indexName: "movies",
    searchClient,
    future: {
        preserveSharedStateOnUnmount: true
    },
    insights: true
});
const virtualSearchBox = instantsearch.connectors.connectSearchBox(()=>{});
search.addWidgets([
    virtualSearchBox({}),
    instantsearch.widgets.hits({
        container: "#hits",
        transformItems (items) {
            return items.map((item)=>({
                    ...item,
                    actors: item.actors.slice(0, 3).join(", ")
                }));
        },
        templates: {
            item: (hit, { html, components })=>html`
        <article>
          <img src=${hit.poster} alt=${hit.title} />
          <div>
            <h1>${components.Highlight({
                    hit,
                    attribute: "title"
                })} (${components.Highlight({
                    hit,
                    attribute: "year"
                })})</h1>
            <p><b>Starring:</b> ${hit.actors} | <b>Directed by:</b> ${components.Highlight({
                    hit,
                    attribute: "director"
                })}</p>
            <p><b>Overview:</b> ${hit.overview}</p>
            <p><b>Price:</b> $${hit.price}</p>
          </div>
        </article>
      `
        }
    }),
    instantsearch.widgets.configure({
        hitsPerPage: 8
    }),
    instantsearch.widgets.dynamicWidgets({
        container: "#dynamic-widgets",
        fallbackWidget ({ container, attribute }) {
            return instantsearch.widgets.panel({
                templates: {
                    header: ()=>attribute
                }
            })(instantsearch.widgets.refinementList)({
                container,
                attribute
            });
        },
        widgets: []
    }),
    instantsearch.widgets.pagination({
        container: "#pagination"
    }),
    instantsearch.widgets.clearRefinements({
        container: "#clear-refinements"
    }),
    instantsearch.widgets.poweredBy({
        container: "#powered-by-algolia"
    }),
    instantsearch.widgets.refinementList({
        container: "#genre-list",
        attribute: "genres",
        cssClasses: {
            count: "hide-count"
        }
    }),
    instantsearch.widgets.toggleRefinement({
        container: "#on-sale",
        attribute: "on_sale",
        templates: {
            labelText ({ count }, { html }) {
                return html`<span>On Sale (${count.toLocaleString()})</span>`;
            }
        }
    }),
    instantsearch.widgets.configure({
        hitsPerPage: 8
    })
]);
search.start();
const recentSearchesPlugin = createLocalStorageRecentSearchesPlugin({
    key: "instantsearch",
    limit: 3,
    transformSource ({ source }) {
        return {
            ...source,
            onSelect ({ setIsOpen, setQuery, item, event }) {
                onSelect({
                    setQuery,
                    setIsOpen,
                    event,
                    query: item.label
                });
            }
        };
    }
});
const querySuggestionsPlugin = createQuerySuggestionsPlugin({
    searchClient,
    indexName: "instant_search_demo_query_suggestions",
    getSearchParams () {
        return recentSearchesPlugin.data.getAlgoliaSearchParams({
            hitsPerPage: 6
        });
    },
    transformSource ({ source }) {
        return {
            ...source,
            sourceId: "querySuggestionsPlugin",
            onSelect ({ setIsOpen, setQuery, event, item }) {
                onSelect({
                    setQuery,
                    setIsOpen,
                    event,
                    query: item.query
                });
            },
            getItems (params) {
                if (!params.state.query) return [];
                return source.getItems(params);
            }
        };
    }
});
autocomplete({
    container: "#searchbox",
    openOnFocus: true,
    detachedMediaQuery: "none",
    onSubmit ({ state }) {
        setInstantSearchUiState({
            query: state.query
        });
    },
    plugins: [
        recentSearchesPlugin,
        querySuggestionsPlugin
    ]
});
function setInstantSearchUiState(indexUiState) {
    search.mainIndex.setIndexUiState({
        page: 1,
        ...indexUiState
    });
}
function onSelect({ setIsOpen, setQuery, event, query }) {
    if (isModifierEvent(event)) return;
    setQuery(query);
    setIsOpen(false);
    setInstantSearchUiState({
        query
    });
}
function isModifierEvent(event) {
    const isMiddleClick = event.button === 1;
    return isMiddleClick || event.altKey || event.ctrlKey || event.metaKey || event.shiftKey;
}

//# sourceMappingURL=index.816e7b21.js.map
