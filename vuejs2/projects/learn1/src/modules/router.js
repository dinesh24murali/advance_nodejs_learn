/* eslint-disable */
import VueRouter from "vue-router";
import Login from "./Auth/Login.vue";
import Dashboard from "./Dashboard/Dashboard.vue";

const Foo = { template: "<div>floor</div>" };
const Bar = { template: "<div>bar</div>" };

const routes = [
  {
    path: "/",
    component: Dashboard,
    children: [
      { path: "foo", component: Foo },
      { path: "bar", component: Bar },
    ],
  },
  { path: "/login", component: Login },
];

const router = new VueRouter({
  routes,
});

router.beforeEach((to, from, next) => {
  const isAuthenticated = localStorage.getItem("user");
  const temp = router;
  console.log({ userName: temp.app.$store.state.auth?.user?.name });
  // debugger;
  if (to.fullPath !== "/login" && !isAuthenticated) next({ path: "/login" });
  else next();
  // next()
});

export default router;
