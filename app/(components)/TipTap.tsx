"use client";

import React from "react";
import Document from "@tiptap/extension-document";
import Heading from "@tiptap/extension-heading";
import Placeholder from "@tiptap/extension-placeholder";
import Paragraph from "@tiptap/extension-paragraph";
import Text from "@tiptap/extension-text";
import Bold from "@tiptap/extension-bold";
import Italic from "@tiptap/extension-italic";
import Strike from "@tiptap/extension-strike";
import Underline from "@tiptap/extension-underline";
import Highlight from "@tiptap/extension-highlight";
import Code from "@tiptap/extension-code";
import Link from "@tiptap/extension-link";
import ListItem from "@tiptap/extension-list-item";
import BulletList from "@tiptap/extension-bullet-list";
import OrderedList from "@tiptap/extension-ordered-list";
import HorizontalRule from "@tiptap/extension-horizontal-rule";
import TaskList from "@tiptap/extension-task-list";
import TaskItem from "@tiptap/extension-task-item";
import CharacterCount from "@tiptap/extension-character-count";
import {BubbleMenu, FloatingMenu, EditorContent, useEditor} from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

import BoldIcon from "@/app/(components)/icons/BoldIcon";
import ItalicIcon from "@/app/(components)/icons/ItalicIcon";
import UnderlineIcon from "@/app/(components)/icons/UnderlineIcon";
import StrikeThroughIcon from "@/app/(components)/icons/StrikeThroughIcon";
import CodeIcon from "@/app/(components)/icons/CodeIcon";
import LinkIcon from "@/app/(components)/icons/LinkIcon";
import { Highlighter } from 'lucide-react';

const Tiptap = () => {
    const editor = useEditor({
        extensions: [
            StarterKit,
            Document,
            Paragraph,
            Text,
            Bold,
            Italic,
            Strike,
            Underline,
            Code,
            BulletList,
            OrderedList,
            ListItem,
            HorizontalRule,
            TaskList,
            TaskItem.configure({
                nested: true,
            }),
            CharacterCount,
            Highlight.configure({
                multicolor: true,
            }),
            Link.configure({
                openOnClick: true,
                autolink: true,
                defaultProtocol: "https",
                protocols: ["http", "https"],
                isAllowedUri: (url, ctx) => {
                    try {
                        // construct URL
                        const parsedUrl = url.includes(":")
                            ? new URL(url)
                            : new URL(`${ctx.defaultProtocol}://${url}`);

                        // use default validation
                        if (!ctx.defaultValidate(parsedUrl.href)) {
                            return false;
                        }

                        // disallowed protocols
                        const disallowedProtocols = ["ftp", "file", "mailto"];
                        const protocol = parsedUrl.protocol.replace(":", "");

                        if (disallowedProtocols.includes(protocol)) {
                            return false;
                        }

                        // only allow protocols specified in ctx.protocols
                        const allowedProtocols = ctx.protocols.map((p) =>
                            typeof p === "string" ? p : p.scheme
                        );

                        if (!allowedProtocols.includes(protocol)) {
                            return false;
                        }

                        // disallowed domains
                        const disallowedDomains = [
                            "example-phishing.com",
                            "malicious-site.net",
                        ];
                        const domain = parsedUrl.hostname;

                        if (disallowedDomains.includes(domain)) {
                            return false;
                        }

                        // all checks have passed
                        return true;
                    } catch (error) {
                        return false;
                    }
                },
                shouldAutoLink: (url) => {
                    try {
                        // construct URL
                        const parsedUrl = url.includes(":")
                            ? new URL(url)
                            : new URL(`https://${url}`);

                        // only auto-link if the domain is not in the disallowed list
                        const disallowedDomains = [
                            "example-no-autolink.com",
                            "another-no-autolink.com",
                        ];
                        const domain = parsedUrl.hostname;

                        return !disallowedDomains.includes(domain);
                    } catch (error) {
                        return false;
                    }
                },
            }),
            Heading.configure({
                levels: [1, 2, 3],
            }),
            Placeholder.configure({
                placeholder: ({node}) => {
                    if (node.type.name === "heading" && node.attrs.level === 1) {
                        return "What's your title...";
                    } else if (node.type.name === "heading" && node.attrs.level === 2) {
                        return "Heading 2...";
                    } else if (node.type.name === "heading" && node.attrs.level === 3) {
                        return "Heading 3...";
                    } else if (node.type.name === "bulletList") {
                        return "Unordered list...";
                    } else if (node.type.name === "orderedList") {
                        return "Ordered list...";
                    } else if (node.type.name === "taskList") {
                        return "...todo";
                    }
                    return "Start typing...";
                },
            }),
        ],
        content: `<h1></h1>`,
    });

    const [isEditable, setIsEditable] = React.useState(true);

    React.useEffect(() => {
        if (editor) {
            editor.setEditable(isEditable);
        }
    }, [isEditable, editor]);

    const setLink = React.useCallback(() => {
        const previousUrl = editor?.getAttributes("link").href;
        const url = window.prompt("URL", previousUrl);

        // cancelled
        if (url === null) {
            return;
        }

        // empty
        if (url === "") {
            editor?.chain().focus().extendMarkRange("link").unsetLink().run();
            return;
        }

        // update link
        editor
            ?.chain()
            .focus()
            .extendMarkRange("link")
            .setLink({href: url})
            .run();
    }, [editor]);

    if (!editor) {
        return null;
    }

    return (
        <>
            <p className="text-end font-bold mt-5">{editor.storage.characterCount.words()} words</p>
            <div>
                {
                    editor && <FloatingMenu editor={editor} tippyOptions={{
                        duration: 100,
                    }}>
                        <div className="flex flex-col p-1.5 gap-2 bg-[#F5F5F5] rounded-lg">
                            <p className="font-semibold p-1 rounded-lg hover:bg-gray-300 cursor-pointer" onClick={ () => editor.chain().focus().toggleHeading({level: 1}).run() }>Heading 1</p>
                            <p className="font-semibold p-1 rounded-lg hover:bg-gray-300 cursor-pointer" onClick={ () => editor.chain().focus().toggleHeading({level: 2}).run()}>Heading 2</p>
                            <p className="font-semibold p-1 rounded-lg hover:bg-gray-300 cursor-pointer" onClick={ () => editor.chain().focus().toggleHeading({level: 3}).run() }>Heading 3</p>
                            <p className="font-semibold p-1 rounded-lg hover:bg-gray-300 cursor-pointer" onClick={ () => editor.chain().focus().toggleBulletList().run() }>Bulleted list</p>
                            <p className="font-semibold p-1 rounded-lg hover:bg-gray-300 cursor-pointer" onClick={ () => editor.chain().focus().toggleOrderedList().run() }>Numbered list</p>
                            <p className="font-semibold p-1 rounded-lg hover:bg-gray-300 cursor-pointer" onClick={ () => editor.chain().focus().setHorizontalRule().run() }>Horinzontal rule</p>
                            <p className="font-semibold p-1 rounded-lg hover:bg-gray-300 cursor-pointer" onClick={ () => editor.chain().focus().toggleTaskList().run() }>Todo list</p>
                        </div>
                    </FloatingMenu>
                }
            </div>
            <div>
                {editor && (
                    <BubbleMenu editor={editor} tippyOptions={{duration: 100}}>
                        <div className="flex items-center bg-[#F5F5F5] w-fit p-0.5 rounded-lg shadow-lg">
                            <button
                                className="p-1 rounded-lg hover:bg-gray-300"
                                onClick={() => editor.chain().focus().toggleBold().run()}
                            >
                                <BoldIcon />
                            </button>
                            <button
                                className="p-1 rounded-lg hover:bg-gray-300 italic"
                                onClick={() => editor.chain().focus().toggleItalic().run()}
                            >
                                <ItalicIcon />
                            </button>
                            <button
                                className="p-1 rounded-lg hover:bg-gray-300 underline"
                                onClick={() => editor.chain().focus().toggleUnderline().run()}
                            >
                                <UnderlineIcon />
                            </button>
                            <button
                                className="p-1 rounded-lg hover:bg-gray-300 line-through"
                                onClick={() => editor.chain().focus().toggleStrike().run()}
                            >
                                <StrikeThroughIcon />
                            </button>
                            <button
                                className="p-1 rounded-lg hover:bg-gray-300"
                                onClick={() => editor.chain().focus().toggleCode().run()}
                            >
                                <CodeIcon />
                            </button>
                            <button
                                className="p-1 rounded-lg hover:bg-gray-300"
                                onClick={setLink}
                            >
                                <LinkIcon />
                            </button>
                            <button
                                className="p-1 rounded-lg hover:bg-gray-300"
                                onClick={() =>
                                    editor.chain().focus().toggleHighlight({color: "red"}).run()
                                }
                            >
                                <Highlighter className="text-red-600" />
                            </button>
                            <button
                                className="p-1 rounded-lg hover:bg-gray-300"
                                onClick={() =>
                                    editor
                                        .chain()
                                        .focus()
                                        .toggleHighlight({color: "blue"})
                                        .run()
                                }
                            >
                                <Highlighter className="text-blue-600" />
                            </button>
                            <button
                                className="p-1 rounded-lg hover:bg-gray-300 "
                                onClick={() =>
                                    editor
                                        .chain()
                                        .focus()
                                        .toggleHighlight({color: "yellow"})
                                        .run()
                                }
                            >
                                <Highlighter className="text-yellow-600" />
                            </button>
                        </div>
                    </BubbleMenu>
                )}
            </div>
            <EditorContent editor={editor}/>
        </>
    );
};

export default Tiptap;
