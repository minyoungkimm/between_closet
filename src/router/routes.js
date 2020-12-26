const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '/', component: () => import('pages/PageHome.vue') },
      { path: '/colorfilter/:id', component: () => import('pages/PageColorFilter.vue') },
      { path: '/categoryfilter/:id', component: () => import('pages/PageCategoryFilter.vue') },
      { path: '/friendlist', component: () => import('pages/PageFriendList.vue') },
      { path: '/friendsearch', component: () => import('pages/PageFriendSearch.vue') },
      { path: '/mypage', name: 'PageProfile', component: () => import('pages/PageProfile.vue') },
      { path: '/recommenu', component: () => import('pages/PageColorSelect.vue') },
      { path: '/recommendations/:rank', component: () => import('pages/PageRecommendations.vue') },
      { path: '/outfitselect', name: 'PageOutfitSelect', component: () => import('pages/PageOutfitSelect.vue') },
      { path: '/sendOutfit', name: 'PageMakeCodi', component: () => import('pages/PageMakeCodi.vue') }

    ]
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  },
  //   {
  //     path: '/recommendations',
  //     component: () => import('layouts/MainLayout.vue'),
  //     children: [
  //       { path: '/', component: () => import('pages/PageRecommendations.vue') },
  //     ]
  //   },
]

export default routes
