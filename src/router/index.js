import { createRouter, createWebHistory } from "vue-router";
import { useUserStore } from "@/stores/userStore.js";
const Sidebar = () => import("@/components/Sidebar.vue");
const NavBar = () => import("@/components/NavBar.vue");
const DashHome = () => import("@/views/back/DashHome.vue");
const Home = () => import("@/views/front/Home.vue");
const Register = () => import("@/views/front/Register.vue");
const Training = () => import("@/views/front/Training.vue");
const Account = () => import("@/views/front/Account.vue");
const TrainingDetail = () => import("@/views/front/TrainingDetail.vue");
const Login = () => import("@/views/Login.vue");

const siteName = "Just Learn";
const routes = [
  //front offices routes
  {
    path: "/",
    name: "home",
    components: {
      default: Home,
      navbar: NavBar,
    },
    alias: "/home",
    meta: {
      title: siteName + " - Home",
    },
  },
  {
    path: "/login",
    name: "login",
    components: {
      default: Login,
      navbar: NavBar,
    },
    meta: {
      title: siteName + " - Login",
    },
  },
  {
    path: "/account",
    name: "account",
    components: {
      default: Account,
      navbar: NavBar,
    },
    meta: {
      requiresAuth: true,
      title: siteName + " - Account",
    },
  },
  {
    path: "/register",
    name: "register",
    components: {
      default: Register,
      navbar: NavBar,
    },
    meta: {
      title: siteName + " - Register",
    },
  },
  {
    path: "/training/:id",
    name: "training",
    props: true,
    components: {
      default: Training,
      navbar: NavBar,
    },
    meta: {
      title: siteName + " - Training",
    },
  },
  {
    path: "/training/:id/detail",
    name: "training.detail",
    props: true,
    components: {
      default: TrainingDetail,
      navbar: NavBar,
    },
    meta: {
      title: siteName + " - Detail Training",
    },
  },

  //back office routes
  {
    path: "/admin",
    name: "admin",
    components: {
      default: DashHome,
      sidebar: Sidebar,
    },
    meta: {
      title: siteName,
      requiresAuth: true,
      isAdmin: true,
    },
    children: [
      {
        path: "",
        name: "admin.dashboard",
        component: () => import("@/views/back/Dashboard.vue"),
        meta: {
          title: siteName + " - Dashboard",
        },
      },
      {
        path: "registration",
        name: "admin.registration",
        component: () => import("@/views/back/Registration.vue"),
        meta: {
          title: siteName + " - Registration",
        },
      },
      {
        path: "category",
        name: "admin.category",
        component: () => import("@/views/back/Category.vue"),
        meta: {
          title: siteName + " - Category",
        },
      },
      {
        path: "users",
        name: "admin.user",
        component: () => import("@/views/back/User.vue"),
        meta: {
          title: siteName + " - Users",
        },
      },
      {
        path: "training",
        name: "admin.training.index",
        component: () => import("@/views/back/traning/TrainingIndex.vue"),
        meta: {
          title: siteName + " - Training",
        },
      },
      {
        path: "training/create",
        name: "admin.training.create",
        component: () => import("@/views/back/traning/TrainingCreate.vue"),
        meta: {
          title: siteName + " - Create Training",
        },
      },
      {
        path: "training/:id/edit",
        name: "admin.training.edit",
        props: true,
        component: () => import("@/views/back/traning/TrainingEdit.vue"),
        meta: {
          title: siteName + " - Edit Training",
        },
      },
      {
        path: "teacher",
        name: "admin.teacher.index",
        component: () => import("@/views/back/teacher/TeacherIndex.vue"),
        meta: {
          title: siteName + " - Training",
        },
      },
      {
        path: "teacher/create",
        name: "admin.teacher.create",
        component: () => import("@/views/back/teacher/TeacherCreate.vue"),
        meta: {
          title: siteName + " - Create Training",
        },
      },
      {
        path: "teacher/:id/edit",
        name: "admin.teacher.edit",
        props: true,
        component: () => import("@/views/back/teacher/TeacherEdit.vue"),
        meta: {
          title: siteName + " - Create Teacher",
        },
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: "smooth",
      };
    } else if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  },
});

router.beforeEach(async (to, from, next) => {
  const userStore = useUserStore();
  if (to.meta.requiresAuth) {
    if (await userStore.getCurrentUser()) {
      if (to.meta.isAdmin) {
        if (userStore.currentUser.type == "admin") {
          next();
        } else {
          next({ name: "home" });
        }
      } else {
        next();
      }
    } else {
      next({ name: "login" });
    }
  } else {
    next();
  }
});

router.afterEach((to) => {
  document.title = to.meta.title;
});

export default router;
