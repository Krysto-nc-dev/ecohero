"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";
import {
  Menu,
  Coins,
  Leaf,
  Search,
  Bell,
  User,
  ChevronDown,
  LogIn,
  LogOut,
} from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

import { Badge } from "./ui/badge";
import { Web3Auth } from "@web3auth/modal";
import { CHAIN_NAMESPACES, IProvider, WEB3AUTH_NETWORK } from "@web3auth/base";
import { EthereumPrivateKeyProvider } from "@web3auth/ethereum-provider";
import { createUser } from "@/utils/db/actions";
//import {useMediaQuery} from ''

const clientId = process.env.NEXT_PUBLIC_WEB3AUTH_CLIENT_ID;

const chainConfig = {
  namespace: CHAIN_NAMESPACES.EIP155,
  chainId: "0Xaa36a7",
  rpcTarget: "https://rpc.ankr.com/eth_sepolia",
  displayName: "Sepolia Testnet",
  blockExplorerUrl: "https://sepolia.etherscan.io",
  ticker: "ETH",
  tickerName: "Ethereum",
  logo: "https://assets.web3auth.io/evm-chains/sepolia.png",
};
const privateKeyProvider = new EthereumPrivateKeyProvider({
  config: chainConfig,
  privateKey: process.env.NEXT_PUBLIC_WEB3AUTH_PRIVATE_KEY,
});
const web3Auth = new Web3Auth({
  clientId,
  web3AuthNetwork: WEB3AUTH_NETWORK.TESTNET,
  privateKeyProvider,
});

interface HeaderProps {
  onMenuClick: () => void;
  totalEarnings: number;
}

export default function Header({ onMenuClick, totalEarnings }: HeaderProps) {
  const [provider, setProvider] = useState<IProvider | null>(null);
  const [loggedIn, setLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [useInfo, setUserInfo] = useState<any>(null);
  const pathname = usePathname();
  const [notificattion, setNotification] = useState(Notification[]<([]));
  const [balance, setBalance] = useState(0);

  useEffect(() => {
    const init = async () => {
        try {
            await web3Auth.initModal();
            setProvider(web3Auth.provider);

            if(web3Auth.connected) {
                setLoggedIn(true);
                const user = await web3Auth.getUserInfo();
                setUserInfo(user);

                if(user.email) {
                   localStorage.setItem('useEmail', user.email);
                   try {
                    
                       await createUser(user.email, user.name || 'Utilisateur Anonyme');
                   } catch (error) {
                    console.log('Erreur lors de la création de l\'utilisateur', error);
                    
                   }
                }
            }
            
        } catch (error) {
            console.log('Erreur lors de l\'initialisation de Web3Auth', error);
            
        }
        finally {
            setIsLoading(false);
        }
    }
  })
}
