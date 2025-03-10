import React, {useState, useEffect} from "react";
import {
    AppBar,
    Toolbar,
    Typography,
    MenuItem,
    Menu,
    IconButton,
    Box,
    List,
    ListItem,
    ListItemText,
    Collapse, Select,
    InputBase
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import logo from "../../assets/global/Jeppy_Logo-1_121x68.jpg";
import {useNavigate} from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";

function Navigation() {
    const menuItems = [
        {label: "HOME", link: "/"},
        {label: "PROFILE", link: "/profile"},
        {label: "PRODUCT", link: "/product"},
        {label: "R & D", submenu: "rnd"},
        {label: "CONTACT", link: "/contact"},
        {label: "INSIGHT", link: "/insight"},
    ];

    // const productSubmenu = [
    //     {label: "2D PAPAD SNACKS", path: "2d-papad-snacks"},
    //     {label: "3D PAPAD SNACKS", path: "3d-papad-snacks"},
    //     {label: "GLUTEN FREE PAPAD SNACKS", path: "gluten-free-papad-snacks"},
    //     {label: "MICRO PAPAD PELLETS", path: "micro-papad-pellets"},
    //     {label: "POTATO PAPAD SNACKS", path: "potato-papad-snacks"},
    //     {label: "PROTEIN PAPAD SNACKS", path: "protein-papad-snacks"},
    //     {label: "SHEETED PAPAD SNACKS", path: "sheeted-papad-snacks"},
    //     {label: "VEGGI SNACKS PAPAD SNACKS", path: "veggi-snacks-papad-snacks"}
    // ];


    const rndSubmenu = [
        {label: "SHAPE", path: "shape"},
        {label: "INGREDIENTS", path: "ingredients"},
        {label: "METHODS", path: "methode"},
    ];

    const languages = [
        {label: "English", value: "english"},
        {label: "Español", value: "spanish"},
        {label: "Français", value: "french"},
    ];

    const navigate = useNavigate()
    const [selectedLanguage, setSelectedLanguage] = useState(languages[0]?.value || "english");

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [openSubmenu, setOpenSubmenu] = useState(null);
    const [scrolled, setScrolled] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
    const [open, setOpen] = useState(false);
    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 768);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const handleMenuOpen = (event, menu) => {
        if (!isMobile && !mobileMenuOpen) {
            setAnchorEl(event.currentTarget);
            setOpenSubmenu(menu);
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleMenuClose = () => {
        setAnchorEl(null);
        setOpenSubmenu(null);
    };

    return (
        <>
            <AppBar sx={{
                backgroundColor: scrolled ? '#003361' : {md: 'transparent', xs: "#003361"},
                borderBottom: scrolled ? "1px solid #fff" : "unset",
                color: "black",
                boxShadow: "none",
                padding: "20px 20px",
                position: {md: "fixed", xs: "sticky"},
                zIndex: 999
            }}>
                <Toolbar sx={{display: "flex", justifyContent: {md: "space-around", xs: "space-between"}}}>
                    <Box onClick={() => {
                        navigate("/")
                    }}>
                        <img src={logo} alt="logo" style={{height: "60px", objectFit: "cover", cursor: "pointer"}}/>
                    </Box>

                    <Box sx={{display: {xs: "none", md: "flex"}, gap: 4, alignItems: "center"}}>
                        {menuItems.map((item, index) => (
                            <Box key={index} onMouseLeave={handleMenuClose}>
                                <Typography
                                    variant="body1"
                                    component="a"
                                    href={item.link}
                                    sx={{
                                        textDecoration: "none",
                                        color: "#FFF",
                                        fontSize: "14px",
                                        cursor: "pointer",
                                        letterSpacing: "1px",
                                        fontWeight: 600,
                                        py: 1,
                                        "&:hover": {borderBottom: "2px solid #373737"},
                                    }}
                                    onMouseEnter={(!isMobile && !mobileMenuOpen && item.submenu) ? (e) => handleMenuOpen(e, item.submenu) : undefined}
                                >
                                    {item.label}
                                </Typography>

                                {item.submenu && (
                                    <Menu
                                        anchorEl={anchorEl}
                                        open={!isMobile && !mobileMenuOpen && openSubmenu === item.submenu}
                                        onClose={handleMenuClose}
                                        MenuListProps={{
                                            onMouseEnter: () => setOpenSubmenu(item.submenu),
                                            onMouseLeave: handleMenuClose,
                                        }}
                                        sx={{
                                            "& .MuiPaper-root": {
                                                backgroundColor: "#373737",
                                                color: "white",
                                                width: "220px"
                                            },
                                        }}
                                    >
                                        {rndSubmenu.map((subItem, i) => (
                                            <MenuItem
                                                key={i}
                                                sx={{fontSize: "11px", color: "#C8C8C8", "&:hover": {color: "#FFF"}}}
                                                // onClick={() => {
                                                //     window.location.href = subItem.path ? subItem.path : "#";
                                                //     handleMenuClose();
                                                // }}
                                                onClick={() => {
                                                    navigate(`/rnd/${subItem.path}`)
                                                    setOpenSubmenu(null)
                                                }}
                                            >
                                                {subItem.label || subItem}
                                            </MenuItem>
                                        ))}
                                    </Menu>
                                )}

                            </Box>
                        ))}
                        <Box sx={{display: "flex", alignItems: "center", gap: 2}}>
                            <Select
                                value={selectedLanguage}
                                onChange={(e) => setSelectedLanguage(e.target.value)}
                                sx={{
                                    fontSize: "14px",
                                    padding: "6px 12px",
                                    minWidth: "150px",

                                    height: "40px",
                                    backgroundColor: "#fff",
                                    color: "#000",
                                }}
                            >
                                {languages.map((lang, index) => (
                                    <MenuItem key={index} value={lang.value}>
                                        {lang.label}
                                    </MenuItem>
                                ))}
                            </Select>
                        </Box>
                    </Box>

                    <Box sx={{display: {xs: "flex", md: "none"}}}>
                        <IconButton onClick={() => setMobileMenuOpen(!mobileMenuOpen)} sx={{
                            color: "#FFF",
                            borderRadius: "0",
                        }}>
                            <MenuIcon fontSize="medium"/>
                        </IconButton>
                    </Box>
                </Toolbar>
            </AppBar>

            <Collapse in={mobileMenuOpen} timeout="auto" unmountOnExit sx={{display: {xs: "flex", md: "none"}}}>
                <List sx={{backgroundColor: "#fff", color: "#000", p: 0}}>
                    {menuItems.map((item, index) => (
                        <Box key={index}>
                            <ListItem
                                button
                                sx={{p: 0}}
                                onClick={() =>
                                    item.submenu
                                        ? setOpenSubmenu(openSubmenu === item.submenu ? null : item.submenu)
                                        : (window.location.href = item.link || "#")
                                }
                            >
                                <ListItemText
                                    primary={item.label}
                                    primaryTypographyProps={{
                                        fontSize: "14px",
                                        letterSpacing: "1px",
                                        fontWeight: 600,
                                        color: "#000",
                                        padding: "8px 15px",
                                        borderBottom: index !== menuItems.length - 1 ? '1px solid #828282' : 'none',
                                    }}
                                />
                                {item.submenu && (openSubmenu === item.submenu ? <ExpandLessIcon/> : <ExpandMoreIcon/>)}
                            </ListItem>
                            {item.submenu && (
                                <Collapse in={openSubmenu === item.submenu} timeout="auto" unmountOnExit>
                                    <List sx={{paddingLeft: 4, paddingRight: 4}}> {/* Reduce padding */}
                                        {rndSubmenu.map((subItem, i) => (
                                            <ListItem
                                                key={i}
                                                sx={{
                                                    borderBottom: "0.5px solid rgba(255, 255, 255, 0.2)",
                                                    p: "9px 0",
                                                    "&:last-child": {borderBottom: "none"},
                                                    cursor: "pointer"
                                                }}
                                                onClick={() => {
                                                    navigate(`/rnd/${subItem.path}`)
                                                    setOpenSubmenu(null)
                                                    setMobileMenuOpen(false)
                                                }}
                                            >
                                                <Typography variant="body2" sx={{fontSize: "11px", color: "#C8C8C8"}}>
                                                    {subItem.label || subItem}
                                                </Typography>
                                            </ListItem>

                                        ))}
                                    </List>
                                </Collapse>
                            )}
                        </Box>
                    ))}
                </List>

                <Box sx={{width: "100%", backgroundColor: "#373737"}}>
                    <Select
                        value={selectedLanguage}
                        onChange={(e) => setSelectedLanguage(e.target.value)}
                        fullWidth
                        sx={{
                            fontSize: "14px",
                            backgroundColor: "white",
                            color: "black",
                            "& .MuiSelect-icon": {
                                color: "black",
                            },
                        }}
                    >
                        {languages.map((lang, index) => (
                            <MenuItem
                                key={index}
                                value={lang.value}
                                sx={{
                                    fontSize: "14px",
                                    fontWeight: 600,
                                    backgroundColor: "white",
                                    color: "black",
                                    "&:hover": {
                                        backgroundColor: "#f0f0f0",
                                    },
                                }}
                            >
                                {lang.label}
                            </MenuItem>
                        ))}
                    </Select>
                </Box>
            </Collapse>
        </>
    );
}

export default Navigation;
