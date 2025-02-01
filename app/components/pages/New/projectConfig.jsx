"use client";

import { Input } from "@/components/ui/input";
import { ShineBorder } from "@/components/ui/shine-border";
import { useMonaco } from "@monaco-editor/react";
import { useEffect, useRef, useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaPython,
  FaJava,
  FaDatabase,
} from "react-icons/fa";
import { BsMarkdown } from "react-icons/bs";
import { SiPhp } from "react-icons/si";
import { DiRuby } from "react-icons/di";
import { FaGolang } from "react-icons/fa6";
import { SiJson } from "react-icons/si";
import { PiUploadSimpleThin } from "react-icons/pi";
import toast from "react-hot-toast";

export default function ProjectConfig() {
  const [language, setLanguage] = useState("html");
  const editorRef = useRef(null);
  const [selectedLang, setselectedLang] = useState({
    value: "html",
    label: "HTML",
    icon: <FaHtml5 color="#e34c26" />,
    ext: ".html",
  });
  const monaco = useMonaco();
  const [code, setcode] = useState(null);
  const editorInstanceRef = useRef(null);

  const languages = [
    {
      value: "html",
      label: "HTML",
      icon: <FaHtml5 color="#e34c26" />,
      ext: ".html",
    },
    {
      value: "css",
      label: "CSS",
      icon: <FaCss3Alt color="#264de4" />,
      ext: ".css",
    },
    {
      value: "javascript",
      label: "JavaScript",
      icon: <FaJsSquare color="#f7df1e" />,
      ext: ".js, .jsx",
    },
    {
      value: "python",
      label: "Python",
      icon: <FaPython color="#306998" />,
      ext: ".py",
    },
    {
      value: "java",
      label: "Java",
      icon: <FaJava color="#007396" />,
      ext: ".java",
    },
    {
      value: "go",
      label: "Go",
      icon: <FaGolang color="#00ADD8" />,
      ext: ".go",
    },
    {
      value: "ruby",
      label: "Ruby",
      icon: <DiRuby color="#701516" />,
      ext: ".rb",
    },
    {
      value: "php",
      label: "PHP",
      icon: <SiPhp color="#8993be" />,
      ext: ".php",
    },
    {
      value: "json",
      label: "JSON",
      icon: <SiJson color="#8C1515" />,
      ext: ".json",
    },
    {
      value: "markdown",
      label: "Markdown",
      icon: <BsMarkdown color="#083fa1" />,
      ext: ".md",
    },
    {
      value: "sql",
      label: "SQL",
      icon: <FaDatabase color="#F29111" />,
      ext: ".sql",
    },
  ];

  useEffect(() => {
    if (!monaco || !editorRef.current) return;

    monaco.editor.defineTheme("custom-theme", {
      base: "vs-dark",
      inherit: true,
      rules: [
        { token: "", foreground: "FFFFFF", background: "#0f172a" },
        { token: "comment", foreground: "6A9955" },
        { token: "keyword", foreground: "C586C0" },
        { token: "number", foreground: "B5CEA8" },
        { token: "string", foreground: "CE9178" },
      ],
      colors: {
        "editor.background": "#0f172a",
        "editor.foreground": "#FFFFFF",
        "editor.lineHighlightBackground": "#1e293b",
        "editorLineNumber.foreground": "#4B5563",
        "editorCursor.foreground": "#0284c7",
        "editor.selectionBackground": "#264F78",
        "editor.inactiveSelectionBackground": "#3A3D41",
      },
    });

    editorInstanceRef.current = monaco.editor.create(editorRef.current, {
      value: code,
      language: language,
      theme: "custom-theme",
      automaticLayout: true,
      suggestOnTriggerCharacters: true,
      wordBasedSuggestions: true,
    });

    return () => {
      if (editorInstanceRef.current) {
        editorInstanceRef.current.dispose();
      }
    };
  }, [monaco, code]);

  useEffect(() => {
    if (editorInstanceRef.current && monaco) {
      const model = editorInstanceRef.current.getModel();
      if (model) {
        monaco.editor.setModelLanguage(model, language);
      }
    }
    const selectedLanguage = languages.find((a) => a.value === language);
    setselectedLang(selectedLanguage);
    getCode();
  }, [language, monaco]);

  const getCode = () => {
    if (editorInstanceRef.current) {
      const code = editorInstanceRef.current.getValue();
      setcode(code);
    }
  };

  const handelFileUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const fileExtArr = file.name.split(".");
    const fileExtension = fileExtArr[fileExtArr.length - 1].toLowerCase();
    const allowedExts = selectedLang?.ext
      .split(",")
      .map((ext) => ext.trim().replace(".", "").toLowerCase());
    if (!allowedExts.includes(fileExtension)) {
      console.log("File extension:", fileExtension);
      toast.error("Invalid file extension");
      return;
    }

    if (file.size > 5242880) {
      toast.error("File maximum size is 5MB");
      return;
    }

    const reader = new FileReader();
    reader.onload = function (e) {
      setcode(e.target.result);
    };
    reader.readAsText(file);
  };

  return (
    <section className="flex justify-center">
      <div className="w-full max-w-primary px-5 flex-col xl:flex-row inline-flex gap-10">
        <ShineBorder
          color={["#7dd3fc", "#0284c7", "#075985"]}
          className="w-full text-start flex flex-col items-start border border-slate-700 xl:w-3/12 p-6  rounded-lg"
        >
          <h2 className="text-xl pb-1 items-center flex gap-2 flex-wrap text-white">
            New Document
          </h2>
          <span className="h-[1px] w-full bg-slate-700 mt-3 mb-5 flex"></span>
          <div className="w-full space-y-5">
            <div className="w-full space-y-2">
              <Label>Document name</Label>
              <Input placeholder="Untitled document" />
            </div>
            <div className="w-full space-y-2">
              <Label>File Extention</Label>
              <Select
                onValueChange={(e) => {
                  setLanguage(e);
                }}
                defaultValue={language}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Theme" />
                </SelectTrigger>
                <SelectContent className="bg-slate-900">
                  {languages &&
                    languages.map((lang, index) => (
                      <SelectItem
                        key={`selct-${lang.label}`}
                        className="flex"
                        value={lang.value}
                      >
                        <div className="flex items-center gap-2">
                          <span className="text-xl">{lang.icon}</span>
                          {lang.label}
                        </div>
                      </SelectItem>
                    ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </ShineBorder>
        <div className="w-full xl:w-9/12 border border-slate-700 overflow-hidden rounded-md">
          <div className="w-full items-center flex justify-between px-5 py-2 border-b bg-slate-800 border-slate-700">
            <h3 className="lowercase text-slate-300">
              <span className="max-[350px]:hidden capitalize">untitled</span>
            </h3>
            <div>
              <input
                onChange={handelFileUpload}
                accept={selectedLang.ext}
                id="fileUpload"
                type="file"
                className="hidden"
              />
              <label
                htmlFor="fileUpload"
                className="flex gap-3 w-full sm:w-fit cursor-pointer p-1 text-slate-300 bg-slate-700 px-3 rounded-md items-center text-sm"
              >
                <PiUploadSimpleThin size={20} />
                <span className="hidden min-[350px]:block">
                  Upload {language.toLocaleUpperCase()}
                </span>
              </label>
            </div>
          </div>
          <div
            ref={editorRef}
            style={{ height: "400px" }}
            className="pt-5 bg-slate-900"
          ></div>
        </div>
      </div>
    </section>
  );
}
