import { IoBookmarks, IoBookSharp } from "react-icons/io5";
import { GrProjects } from "react-icons/gr";
import { FaYoutube } from "react-icons/fa";

type LinksToPageType = {
  path: string;
  label: string;
  icon: any;
}[];

export const pagesRoutes: LinksToPageType = [
  {
    path: "/dashboard/bookmarks",
    label: "Bookmarks",
    icon: <IoBookmarks />
  },
  {
    path: "/dashboard/courses",
    label: "Courses",
    icon: <IoBookSharp />
  },
  {
    path: "/dashboard/para",
    label: "Para",
    icon: <GrProjects />
  },
  {
    path: "/dashboard/youtube",
    label: "Youtube",
    icon: <FaYoutube />
  }
];
