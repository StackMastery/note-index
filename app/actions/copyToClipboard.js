import toast from "react-hot-toast";

export const copyToClipboard = async (text) => {
  try {
    await navigator.clipboard.writeText(text);
    toast.success("Copy to clipboard succes");
  } catch (error) {
    console.error("Failed to copy text: ", error);
  }
};
