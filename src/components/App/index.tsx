import {Box} from "@mui/material";

import Routing from "../Routing";
import Header from "../Header";
import Footer from "../Footer";
import { useState } from 'react';

const App = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return <Box>
        <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen}/>
        <Routing isMenuOpen={isMenuOpen}/>
        <Footer/>
    </Box>
}

export default App