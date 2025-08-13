import { CiVault } from "react-icons/ci";
import { BsTags } from "react-icons/bs";
import { LiaFileExportSolid } from "react-icons/lia";
import { FaUserLock } from "react-icons/fa6";
import { BiSolidMessageEdit } from "react-icons/bi";
import { MdAutoFixHigh } from "react-icons/md";

export const cardData = [
  {
    icon: CiVault,
    title: "Personal Vault",
    description: "Save your prompts privately and access anytime.",
  },
  {
    icon: BsTags,
    title: "AI Tagging",
    description: "Automatically categorize your prompts for easy search.",
  },
  {
    icon: LiaFileExportSolid,
    title: "Export Anywhere",
    description: "Download your prompts as JSON, Notion, or PDF. ",
  },
];

export const workData = [
  {
    icon: FaUserLock,
    title: "Sign up for free.",
    description: "Create your account to get started.",
  },
  {
    icon: BiSolidMessageEdit,
    title: "Add your first prompt.",
    description: "Paste or write your first AI prompt.",
  },
  {
    icon: MdAutoFixHigh,
    title: "Let AI organize and tag.",
    description: "AI automatically categorizes your prompts.",
  },
];
