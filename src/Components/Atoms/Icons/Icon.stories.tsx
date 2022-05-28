import { ComponentStory, ComponentMeta } from '@storybook/react';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import GridViewIcon from '@mui/icons-material/GridView';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import FormatAlignJustifyIcon from '@mui/icons-material/FormatAlignJustify';



import Icon from './Icon';
const icons = {
    title: "Atoms/Icon",
    component: Icon,
} as ComponentMeta<typeof Icon>;
export const BankCard: ComponentStory<typeof Icon> = (args) => <Icon icon={<CreditCardIcon />}></Icon>;
export const DeliveryFees: ComponentStory<typeof Icon> = (args) => <Icon icon={<LocalShippingOutlinedIcon/>}></Icon>;
export const Wallet: ComponentStory<typeof Icon> = (args) => <Icon icon={<AccountBalanceWalletIcon/>}></Icon>;
export const DropDwon: ComponentStory<typeof Icon> = (args) => <Icon icon={<ExpandMoreIcon/>}></Icon>;
export const Grid: ComponentStory<typeof Icon> = (args) => <Icon icon={<GridViewIcon />}></Icon>;
export const Chart: ComponentStory<typeof Icon> = (args) => <Icon icon={<DonutLargeIcon />}></Icon>;
export const Edit: ComponentStory<typeof Icon> = (args) => <Icon icon={<ModeEditIcon />}></Icon>;
export const List: ComponentStory<typeof Icon> = (args) => <Icon icon={<FormatAlignJustifyIcon />}></Icon>;

export default icons;