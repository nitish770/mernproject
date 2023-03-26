import {AppBar, Toolbar, Box, Typography ,styled} from '@mui/material';
import CustomButtons from './CustomButtons';
import Search from './Search';
const StyledHeader = styled(AppBar)`
    background: #2874f0;
    height: 55px;
`;

const Component = styled(Box)`
    margin-left: 12%;
    line-height: 0;
`;

const SubHeading = styled(Typography)`
    font-size: 10px;
    font-style: italic;
`;

const PlusImage = styled('img')({
    width: 10,
    height: 10,
    marginLeft: 6
});

const CustomButtonWrapper = styled(Box)`
    margin: 0 3% 0 auto;
`

function Header() {

    const logoURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';
    const subURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';

  return (
    <StyledHeader>
        <Toolbar style={{minHeight: 55}}> 
            <Component>
                <img src={logoURL} alt="lolog" style={{width: 75}}/>
                <Box style={{ display: 'flex'}}>
                    <SubHeading>Explore&nbsp;
                        <Box component="span" style={{color:'#FFE500'}}>Plus</Box>
                    </SubHeading>
                    <PlusImage src={subURL} alt="sub-log"/>
                </Box>
            </Component>
            <Search/>

            <CustomButtonWrapper>
                <CustomButtons/>
            </CustomButtonWrapper>

        </Toolbar>
    </StyledHeader>
  )
}

export default Header;