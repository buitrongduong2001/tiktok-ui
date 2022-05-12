// Layout
import { HeaderOnly } from "~/components/Layout";

// Pages

import Home from "~/pages/Home";
import Following from "~/pages/Following";
import Profile from "~/pages/Profile";
import Upload from "~/pages/Upload";
import Search from "~/pages/Search";

const publicRoutes = [
  { path: "/", component: Home },
  { path: "/following", component: Following },
  { path: "/upload", component: Upload },
  { path: "/search", component: Search, layout: null },
  { path: "/profile", component: Profile, layout: HeaderOnly },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
