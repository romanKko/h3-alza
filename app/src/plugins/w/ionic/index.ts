import { App } 		from 'vue'
import { Options } 	from './types'

//Components
import {
	IonContent, IonPage, IonLabel, IonBackButton, IonCheckbox, IonText, IonButton, IonItem, 
	IonToolbar, IonHeader, IonFooter, IonSlides, IonSlide, IonRow, IonCol, IonGrid, IonInput, IonButtons, 
	IonIcon, IonList, IonTitle, IonMenu, IonRouterOutlet, IonMenuButton, IonSegment, IonSegmentButton, IonVirtualScroll,
	IonTextarea, IonSearchbar, IonRefresherContent, IonRefresher, IonInfiniteScrollContent, IonInfiniteScroll, IonAvatar,
	IonModal, IonRadioGroup, IonRadio, IonNote, IonCard, IonCardContent, IonTabBar, IonTabButton, IonMenuToggle, IonFab,
	IonFabButton, IonReorderGroup, IonReorder, IonFabList, IonSelect, IonSelectOption, IonToggle, IonBadge, IonChip, IonTabs, IonItemGroup, IonThumbnail, IonItemSliding, IonItemOption, IonItemOptions, IonImg, IonSkeletonText, IonSpinner, IonCardHeader, IonCardTitle
} from '@ionic/vue'

export default {
	install: (app: App, options: Options) => {
		if (options && options.disabled === true) return

		app.component('ion-content', IonContent)
		app.component('ion-page', IonPage)
		app.component('ion-label', IonLabel)
		app.component('ion-back-button', IonBackButton)
		app.component('ion-checkbox', IonCheckbox)
		app.component('ion-text', IonText)
		app.component('ion-button', IonButton)
		app.component('ion-item', IonItem)
		app.component('ion-item-group', IonItemGroup)
		app.component('ion-item-sliding', IonItemSliding)
		app.component('ion-item-option', IonItemOption)
		app.component('ion-item-options', IonItemOptions)
		app.component('ion-toolbar', IonToolbar)
		app.component('ion-header', IonHeader)
		app.component('ion-footer', IonFooter)
		app.component('ion-slides', IonSlides)
		app.component('ion-slide', IonSlide)
		app.component('ion-spinner', IonSpinner)
		app.component('ion-row', IonRow)
		app.component('ion-col', IonCol)
		app.component('ion-grid', IonGrid)
		app.component('ion-input', IonInput)
		app.component('ion-buttons', IonButtons)
		app.component('ion-icon', IonIcon)
		app.component('ion-img', IonImg)
		app.component('ion-list', IonList)
		app.component('ion-skeleton-text', IonSkeletonText)
		app.component('ion-title', IonTitle)
		app.component('ion-menu', IonMenu)
		app.component('ion-menu-button', IonMenuButton)
		app.component('ion-router-outlet', IonRouterOutlet)
		app.component('ion-segment', IonSegment)
		app.component('ion-segment-button', IonSegmentButton)
		app.component('ion-virtual-scroll', IonVirtualScroll)
		app.component('ion-textarea', IonTextarea)
		app.component('ion-searchbar', IonSearchbar)
		app.component('ion-refresher-content', IonRefresherContent)
		app.component('ion-refresher', IonRefresher)
		app.component('ion-infinite-scroll-content', IonInfiniteScrollContent)
		app.component('ion-infinite-scroll', IonInfiniteScroll)
		app.component('ion-avatar', IonAvatar)
		app.component('ion-thumbnail', IonThumbnail)
		app.component('ion-modal', IonModal)
		app.component('ion-radio-group', IonRadioGroup)
		app.component('ion-radio', IonRadio)
		app.component('ion-note', IonNote)
		app.component('ion-card', IonCard)
		app.component('ion-card-content', IonCardContent)
		app.component('ion-tab-bar', IonTabBar)
		app.component('ion-tab-button', IonTabButton),
		app.component('ion-menu-toggle', IonMenuToggle)
		app.component('ion-fab', IonFab)
		app.component('ion-fab-button', IonFabButton)
		app.component('ion-fab-list', IonFabList)
		app.component('ion-reorder-group', IonReorderGroup)
		app.component('ion-reorder', IonReorder)
		app.component('ion-select', IonSelect)
		app.component('ion-select-option', IonSelectOption)
		app.component('ion-toggle', IonToggle)
		app.component('ion-badge', IonBadge)
		app.component('ion-chip', IonChip),
		app.component('ion-tabs', IonTabs),
		app.component('ion-card-header', IonCardHeader),
		app.component('ion-card-title', IonCardTitle)
	}
}