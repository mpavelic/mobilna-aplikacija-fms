'use strict';


customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">FMS documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link">AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-dcd6debf1e791cc92923a8f8807dc369"' : 'data-target="#xs-components-links-module-AppModule-dcd6debf1e791cc92923a8f8807dc369"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-dcd6debf1e791cc92923a8f8807dc369"' :
                                            'id="xs-components-links-module-AppModule-dcd6debf1e791cc92923a8f8807dc369"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link">AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ExpensesListPageModule.html" data-type="entity-link">ExpensesListPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ExpensesListPageModule-9159749009e658c06bd562bf90db008c"' : 'data-target="#xs-components-links-module-ExpensesListPageModule-9159749009e658c06bd562bf90db008c"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ExpensesListPageModule-9159749009e658c06bd562bf90db008c"' :
                                            'id="xs-components-links-module-ExpensesListPageModule-9159749009e658c06bd562bf90db008c"' }>
                                            <li class="link">
                                                <a href="components/ExpensesDetailComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ExpensesDetailComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ExpensesListPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ExpensesListPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ExpensesPageModule.html" data-type="entity-link">ExpensesPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ExpensesPageModule-765895e03ee610f695d9f8e5be6ce8a8"' : 'data-target="#xs-components-links-module-ExpensesPageModule-765895e03ee610f695d9f8e5be6ce8a8"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ExpensesPageModule-765895e03ee610f695d9f8e5be6ce8a8"' :
                                            'id="xs-components-links-module-ExpensesPageModule-765895e03ee610f695d9f8e5be6ce8a8"' }>
                                            <li class="link">
                                                <a href="components/ExpensesPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ExpensesPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/HomePageModule.html" data-type="entity-link">HomePageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-HomePageModule-c7944cc75fb3e5d5c12f4a3d2d1f0196"' : 'data-target="#xs-components-links-module-HomePageModule-c7944cc75fb3e5d5c12f4a3d2d1f0196"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-HomePageModule-c7944cc75fb3e5d5c12f4a3d2d1f0196"' :
                                            'id="xs-components-links-module-HomePageModule-c7944cc75fb3e5d5c12f4a3d2d1f0196"' }>
                                            <li class="link">
                                                <a href="components/HomePage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">HomePage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/LogInPageModule.html" data-type="entity-link">LogInPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-LogInPageModule-350232c9130fc3246489d07e55af1fd5"' : 'data-target="#xs-components-links-module-LogInPageModule-350232c9130fc3246489d07e55af1fd5"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-LogInPageModule-350232c9130fc3246489d07e55af1fd5"' :
                                            'id="xs-components-links-module-LogInPageModule-350232c9130fc3246489d07e55af1fd5"' }>
                                            <li class="link">
                                                <a href="components/LogInPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">LogInPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/MainPagePageModule.html" data-type="entity-link">MainPagePageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-MainPagePageModule-db5a2bf13541b81b28d1697536284fde"' : 'data-target="#xs-components-links-module-MainPagePageModule-db5a2bf13541b81b28d1697536284fde"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-MainPagePageModule-db5a2bf13541b81b28d1697536284fde"' :
                                            'id="xs-components-links-module-MainPagePageModule-db5a2bf13541b81b28d1697536284fde"' }>
                                            <li class="link">
                                                <a href="components/MainPagePage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MainPagePage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/RegistrationPageModule.html" data-type="entity-link">RegistrationPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-RegistrationPageModule-e841446b3d655d424052331c70cf35a0"' : 'data-target="#xs-components-links-module-RegistrationPageModule-e841446b3d655d424052331c70cf35a0"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-RegistrationPageModule-e841446b3d655d424052331c70cf35a0"' :
                                            'id="xs-components-links-module-RegistrationPageModule-e841446b3d655d424052331c70cf35a0"' }>
                                            <li class="link">
                                                <a href="components/InfoModalComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">InfoModalComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RegistrationPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">RegistrationPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/RevenuesListPageModule.html" data-type="entity-link">RevenuesListPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-RevenuesListPageModule-16a89732e5f380aa680fbaab6e431a0f"' : 'data-target="#xs-components-links-module-RevenuesListPageModule-16a89732e5f380aa680fbaab6e431a0f"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-RevenuesListPageModule-16a89732e5f380aa680fbaab6e431a0f"' :
                                            'id="xs-components-links-module-RevenuesListPageModule-16a89732e5f380aa680fbaab6e431a0f"' }>
                                            <li class="link">
                                                <a href="components/RevenuesListPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">RevenuesListPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/RevenuesPageModule.html" data-type="entity-link">RevenuesPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-RevenuesPageModule-cfd6f9cccfdf0fc8a5b7c3ee75f7ac36"' : 'data-target="#xs-components-links-module-RevenuesPageModule-cfd6f9cccfdf0fc8a5b7c3ee75f7ac36"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-RevenuesPageModule-cfd6f9cccfdf0fc8a5b7c3ee75f7ac36"' :
                                            'id="xs-components-links-module-RevenuesPageModule-cfd6f9cccfdf0fc8a5b7c3ee75f7ac36"' }>
                                            <li class="link">
                                                <a href="components/RevenuesPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">RevenuesPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SharedModule.html" data-type="entity-link">SharedModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SharedModule-cd8c0dd2ed03147a732a2281f7efe8e7"' : 'data-target="#xs-components-links-module-SharedModule-cd8c0dd2ed03147a732a2281f7efe8e7"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SharedModule-cd8c0dd2ed03147a732a2281f7efe8e7"' :
                                            'id="xs-components-links-module-SharedModule-cd8c0dd2ed03147a732a2281f7efe8e7"' }>
                                            <li class="link">
                                                <a href="components/EmailMessageComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">EmailMessageComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LoaderComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">LoaderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/OibValidationMessageComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">OibValidationMessageComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RequiredValidationMessageComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">RequiredValidationMessageComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/AccountBalance.html" data-type="entity-link">AccountBalance</a>
                            </li>
                            <li class="link">
                                <a href="classes/Expense.html" data-type="entity-link">Expense</a>
                            </li>
                            <li class="link">
                                <a href="classes/Helpers.html" data-type="entity-link">Helpers</a>
                            </li>
                            <li class="link">
                                <a href="classes/Revenue.html" data-type="entity-link">Revenue</a>
                            </li>
                            <li class="link">
                                <a href="classes/User.html" data-type="entity-link">User</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/CrudService.html" data-type="entity-link">CrudService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ExpensesService.html" data-type="entity-link">ExpensesService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LogINService.html" data-type="entity-link">LogINService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/RevenuesService.html" data-type="entity-link">RevenuesService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/category.html" data-type="entity-link">category</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});