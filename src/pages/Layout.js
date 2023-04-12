import { Outlet, Link } from "react-router-dom";
import { Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react'

const Layout = () => {
    return (
        <>
            <Box>
                <Breadcrumb>
                    <BreadcrumbItem>
                        <BreadcrumbLink as={Link} to="/">Home</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbItem>
                        <BreadcrumbLink as={Link} to="/contact">Contact</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbItem>
                        <BreadcrumbLink as={Link} to="/newme">New Me</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbItem>
                        <BreadcrumbLink as={Link} to="/awesome">Awesome</BreadcrumbLink>
                    </BreadcrumbItem>
                </Breadcrumb>
            </Box>
            <Outlet />
        </>
    )
};

export default Layout;