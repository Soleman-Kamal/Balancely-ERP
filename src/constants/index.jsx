import {
    BarChart3,
    Building2,
    CircleDollarSign,
    FileChartColumn,
    FileText,
    HandCoins,
    Landmark,
    LayoutDashboard,
    ReceiptText,
    Settings,
    ShieldCheck,
    Users,
    UserRoundCheck,
    WalletCards,
} from "lucide-react";

export const navbarLinks = [
    {
        title: "Overview",
        links: [
            {
                label: "Dashboard",
                icon: LayoutDashboard,
                path: "/",
            },
            {
                label: "Analytics",
                icon: BarChart3,
                path: "/analytics",
            },
        ],
    },
    {
        title: "Finance",
        links: [
            {
                label: "Revenue",
                icon: CircleDollarSign,
                path: "/revenue",
            },
            {
                label: "Expenses",
                icon: ReceiptText,
                path: "/expenses",
            },
            {
                label: "Transactions",
                icon: WalletCards,
                path: "/transactions",
            },
            {
                label: "Invoices",
                icon: FileText,
                path: "/invoices",
            },
        ],
    },
    {
        title: "Management",
        links: [
            {
                label: "Accounts",
                icon: Landmark,
                path: "/accounts",
            },
            {
                label: "Customers",
                icon: Users,
                path: "/customers",
            },
            {
                label: "Vendors",
                icon: Building2,
                path: "/vendors",
            },
            {
                label: "Payroll",
                icon: HandCoins,
                path: "/payroll",
            },
        ],
    },
    {
        title: "Reports",
        links: [
            {
                label: "Financial Reports",
                icon: FileChartColumn,
                path: "/financial-reports",
            },
            {
                label: "Tax Reports",
                icon: ShieldCheck,
                path: "/tax-reports",
            },
        ],
    },
    {
        title: "System",
        links: [
            {
                label: "Users & Roles",
                icon: UserRoundCheck,
                path: "/users",
            },
            {
                label: "Settings",
                icon: Settings,
                path: "/settings",
            },
        ],
    },
];