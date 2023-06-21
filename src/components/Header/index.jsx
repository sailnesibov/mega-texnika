import { Box, Button, Container, Stack, Typography } from "@mui/material";
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import MegaTexnikaLogo from "../../assets/logo.png";
import Navlink from "../Navlink";

const Header = () => {
    return (
        <>
            <Box sx={{ backgroundColor: 'rgba(255, 192, 31, 1)', py: 1 }}>
                <Container>
                    <Stack flexDirection="row" justifyContent="space-between">
                        <Typography>+994(12) 123 45 67  |  Fətəli Xan Xoyski 111A, Bakı Azərbaycan</Typography>
                    </Stack>
                    <Stack flexDirection="row-reverse" gap={2}>
                        <InstagramIcon />
                        <FacebookIcon />
                        <TwitterIcon />
                    </Stack>
                </Container>
            </Box>
            <Container>

                <Stack flexDirection="row" alignItems="center" gap={2} justifyContent="space-between">
                    <img src={MegaTexnikaLogo} />
                    <Stack flexDirection="row" gap={2}>
                        <Navlink to="/" title="Əsas səhifə" />
                        <Navlink to="haqqimizda" title="Haqqimizda" />
                        <Navlink to="texnikalar" title="Texnikalar" />
                        <Navlink to="icaresertleri" title="İcarə şərtləri" />
                        <Navlink to="blog" title="Blog" />
                        <Navlink to="elaqe" title="Əlaqə" />
                    </Stack>
                    <Stack flexDirection="row" gap={2}>
                        <Typography>Az</Typography>
                        <Typography>Ru</Typography>
                        <Typography>En</Typography>
                    </Stack>
                </Stack >
            </Container>
        </>
    )
}
export default Header