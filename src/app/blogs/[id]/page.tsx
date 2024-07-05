"use client";
import React from "react";
import { NavbarDemo } from "@/components/Navbar";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { notFound } from "next/navigation";
import Blog from "@/components/Blog";
import axios from "axios";
import Footer from "@/components/Footer";

interface Data {
    _id: string;
    title: string;
    subtitle: string;
    url: string;
    image: string;
    description: string;
    createdAt: string;
    updatedAt: string;
}

export default function Page({ params }: { params: { id: string } }) {
    const [blog, setBlog] = React.useState<Data | undefined>(undefined);
    const [loading, setLoading] = React.useState<boolean>(true);

    React.useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const res = await axios.get(`${process.env.NEXT_PUBLIC_API}/api/v1/blogs/${params.id}`);
            setBlog(res?.data?.data);
            if (!res?.data?.data) {
                notFound();
            }
        } catch (error) {
            console.error("Error fetching blog data:", error);
            notFound();
        } finally {
            setLoading(false);
        }
    };

    if (!params.id) {
        notFound();
    }

    if (loading) {
        return <div className="w-full h-[100vh] flex items-center justify-center"><span className="loader"></span>&nbsp;&nbsp;Loading...</div>;
    }

    return (
        <NextThemesProvider attribute="class">
            <NavbarDemo />
            {blog ? <Blog data={blog} /> : notFound()}
            <Footer />
        </NextThemesProvider>
    );
}
