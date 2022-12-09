import React, { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => (
    <section className="md:px-8 lg:px-2 grid lg:grid-cols-12 md:grid-cols-6 sm:grid-cols-1">
        <section className="lg:col-start-3 lg:col-span-8 md:col-start-1 md:col-span-full sm:col-start-1">
        {children}
        </section>
    </section>
);

export default Layout;