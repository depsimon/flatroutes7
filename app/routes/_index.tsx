import type { Route } from "./+types/_index";
import { Welcome } from "../welcome/welcome";
import { Link } from "react-router";
import { Navigation } from "~/Navigation";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return <div>
    <header>/_index.tsx</header>
        <Navigation />
  </div>
}
