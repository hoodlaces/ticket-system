import Nav from "@/app/tickets/Nav";
import TenantName from '@/app/tickets/TenantName';


export default function TicketsLayout(pageProps) {
    return (
        <>
            <section style={{ borderBottom: "1px solid gray" }}>
                <TenantName />
                <Nav TenantName="Jack Tripper" />
            </section>
            <section>{pageProps.children}</section>
        </>
    );
}