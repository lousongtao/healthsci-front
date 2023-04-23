export default [
  {
    path: '/user',
    layout: false,
    routes: [
      {
        path: '/user',
        routes: [
          {
            name: 'login',
            path: '/user/login',
            component: './user/Login',
          },
        ],
      },
      {
        component: './404',
      },
    ],
  },
  {
    path: '/welcome',
    name: 'welcome',
    icon: 'smile',
    component: './Welcome',
  },
  {
    path: '/admin',
    name: 'admin',
    icon: 'crown',
    access: 'canAdmin',
    component: './Admin',
    routes: [
      {
        path: '/admin/sub-page',
        name: 'sub-page',
        icon: 'smile',
        component: './Welcome',
      },
      {
        component: './404',
      },
    ],
  },
  {
    name: 'Account',
    path: '/account',
    component: './account'
  },
  {
    name: 'Brand',
    path: '/Brand',
    component: './Brand',
    access: 'canAddBrand'
  },
  {
    name: 'PopsciMgmt',
    path: '/PopsciMgmt',
    component: './PopsciMgmt',
    access: 'canAddMgmt'
  },
  {
    name: 'Works',
    path: '/WorksMgmt',
    component: './WorksMgmt',
    access: 'canAddWorks'
  },
  {
    name: 'OutstandingPeople',
    path: '/OutstandingPeople',
    component: './OutstandingPeople',
    access: 'canAddPeople'
  },
  {
    path: '/',
    redirect: '/welcome.html',
  },
  {
    component: './404',
  },
];
