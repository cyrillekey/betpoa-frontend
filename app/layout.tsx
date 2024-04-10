"use client"
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import Image from "next/image";
import { useState } from "react";
import {Hide} from '@chakra-ui/react'

import { usePathname } from "next/navigation";
import { Link } from "@chakra-ui/next-js";

const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  const pathname = (usePathname())
  const [navOpen,setNavOpen] = useState(false)
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <div className="layout" id="app">
            <Hide below="lg">
            <header className="nav__top">
              <nav className="nav__top__item main-navigation">
                <ul className="nav">
                  <li className="nav-item">
                    <a className="nav-link active" href="">
                      {" "}
                      Matches
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="">
                      Live Score
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="">
                      Statistics
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="">
                      Analitics
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="">
                      Forecasts
                    </a>
                  </li>
                </ul>
              </nav>
              <div className="nav__top__item notifications">
                <a>
                  <svg width="24" height="24" viewBox="0 0 24 24">
                    {" "}
                    <path d="M11.5,22C11.64,22 11.77,22 11.9,21.96C12.55,21.82 13.09,21.38 13.34,20.78C13.44,20.54 13.5,20.27 13.5,20H9.5A2,2 0 0,0 11.5,22M18,10.5C18,7.43 15.86,4.86 13,4.18V3.5A1.5,1.5 0 0,0 11.5,2A1.5,1.5 0 0,0 10,3.5V4.18C7.13,4.86 5,7.43 5,10.5V16L3,18V19H20V18L18,16M19.97,10H21.97C21.82,6.79 20.24,3.97 17.85,2.15L16.42,3.58C18.46,5 19.82,7.35 19.97,10M6.58,3.58L5.15,2.15C2.76,3.97 1.18,6.79 1,10H3C3.18,7.35 4.54,5 6.58,3.58Z" />{" "}
                  </svg>
                  <span className="sr-only">Notifications</span>
                </a>
              </div>
              <div className="nav__top__item user">
                <div className="user__profile-picture">
                  <Image
                    alt="Linette Simmons"
                    src={{src:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=400&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjE0NTg5fQ",width: 100,height: 100}}
                  />
                </div>
                <div className="user__info">
                  <p className="user__name">Linette Simmons</p>
                  <div className="user__balance">
                    <p className="user__balance__dollars">1 823.23$</p>
                    <p className="user__balance__currency">6 385 PLN</p>
                  </div>
                </div>
              </div>
            </header>
            </Hide>
            <div className={`nav__left ${navOpen ? 'opened': ''}`}>
              <div className="nav__left__item nav__left__toggle">
                <button className="btn btn--icon btn--no-bg" onClick={()=>setNavOpen(!navOpen)}>
                  <span className="sr-only">Toggle navbar</span>
                  <svg viewBox="0 0 24 24">
                    <path
                      fill="currentColor"
                      d="M19,13H3V11H19L15,7L16.4,5.6L22.8,12L16.4,18.4L15,17L19,13M3,6H13V8H3V6M13,16V18H3V16H13Z"
                    />
                  </svg>
                </button>
              </div>
              <nav className={`secondary-navigation ${navOpen ? 'opened': ''}`}>
                <div className="nav__left__item">
                  <ul className="nav nav--vertical">
                    <li className="nav-item">
                      <Link className={`nav-link ${pathname == "/" && 'active'}`} href="/">
                        <svg viewBox="0 0 24 24">
                          <path
                            fill="currentColor"
                            d="M13,3V9H21V3M13,21H21V11H13M3,21H11V15H3M3,13H11V3H3V13Z"
                          />
                        </svg>
                        <span>Feed</span>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        <svg viewBox="0 0 24 24">
                          <path
                            fill="currentColor"
                            d="M2.5,4.5H21.5C22.34,4.5 23,5.15 23,6V17.5C23,18.35 22.34,19 21.5,19H2.5C1.65,19 1,18.35 1,17.5V6C1,5.15 1.65,4.5 2.5,4.5M9.71,8.5V15L15.42,11.7L9.71,8.5M17.25,21H6.65C6.35,21 6.15,20.8 6.15,20.5C6.15,20.2 6.35,20 6.65,20H17.35C17.65,20 17.85,20.2 17.85,20.5C17.85,20.8 17.55,21 17.25,21Z"
                          />
                        </svg>
                        <span>Videos</span>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        <svg viewBox="0 0 24 24">
                          <path
                            fill="currentColor"
                            d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"
                          />
                        </svg>
                        <span>Favourites</span>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="nav__left__item">
                  <ul className="nav nav--vertical">
                    <li className="nav-item">
                      <Link className={`nav-link ${pathname == "/markets/football" && 'active'}`} href="/markets/football">
                        <svg viewBox="0 0 24 24">
                          <path
                            fill="currentColor"
                            d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,3C13.76,3 15.4,3.53 16.78,4.41L16.5,5H13L12,5L10.28,4.16L10.63,3.13C11.08,3.05 11.53,3 12,3M9.53,3.38L9.19,4.41L6.63,5.69L5.38,5.94C6.5,4.73 7.92,3.84 9.53,3.38M13,6H16L18.69,9.59L17.44,12.16L14.81,12.78L11.53,8.94L13,6M6.16,6.66L7,10L5.78,13.06L3.22,13.94C3.08,13.31 3,12.67 3,12C3,10.1 3.59,8.36 4.59,6.91L6.16,6.66M20.56,9.22C20.85,10.09 21,11.03 21,12C21,13.44 20.63,14.79 20.03,16H19L18.16,12.66L19.66,9.66L20.56,9.22M8,10H11L13.81,13.28L12,16L8.84,16.78L6.53,13.69L8,10M12,17L15,19L14.13,20.72C13.44,20.88 12.73,21 12,21C10.25,21 8.63,20.5 7.25,19.63L8.41,17.91L12,17M19,17H19.5C18.5,18.5 17,19.67 15.31,20.34L16,19L19,17Z"
                          />
                        </svg>
                        <span>Football</span>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        <svg viewBox="0 0 24 24">
                          <path
                            fill="currentColor"
                            d="M7.5,7.5C9.17,5.87 11.29,4.69 13.37,4.18C15.46,3.67 17.5,3.83 18.6,4C19.71,4.15 19.87,4.31 20.03,5.41C20.18,6.5 20.33,8.55 19.82,10.63C19.31,12.71 18.13,14.83 16.5,16.5C14.83,18.13 12.71,19.31 10.63,19.82C8.55,20.33 6.5,20.18 5.41,20.03C4.31,19.87 4.15,19.71 4,18.6C3.83,17.5 3.67,15.46 4.18,13.37C4.69,11.29 5.87,9.17 7.5,7.5M7.3,15.79L8.21,16.7L9.42,15.5L10.63,16.7L11.54,15.79L10.34,14.58L12,12.91L13.21,14.12L14.12,13.21L12.91,12L14.58,10.34L15.79,11.54L16.7,10.63L15.5,9.42L16.7,8.21L15.79,7.3L14.58,8.5L13.37,7.3L12.46,8.21L13.66,9.42L12,11.09L10.79,9.88L9.88,10.79L11.09,12L9.42,13.66L8.21,12.46L7.3,13.37L8.5,14.58L7.3,15.79Z"
                          />
                        </svg>
                        <span>Rugby</span>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        <svg viewBox="0 0 24 24">
                          <path
                            fill="currentColor"
                            d="M12.3,2C11.33,2.03 10.58,2.84 10.61,3.8C10.62,4.04 10.67,4.27 10.77,4.5L11.06,5.14V5.14C11.1,5.27 11.03,5.41 10.89,5.45C10.8,5.5 10.7,5.45 10.63,5.37L10.21,4.82C9.88,4.4 9.38,4.14 8.85,4.13C7.88,4.11 7.08,4.88 7.06,5.84C7.05,6.26 7.19,6.66 7.45,7L7.87,7.5H7.88C7.96,7.63 7.93,7.79 7.82,7.87C7.73,7.94 7.61,7.94 7.53,7.87L7,7.45C6.66,7.19 6.25,7.05 5.84,7.06C4.88,7.08 4.11,7.88 4.13,8.85C4.14,9.38 4.4,9.88 4.82,10.21L5.39,10.65C5.5,10.75 5.5,10.91 5.38,11C5.31,11.07 5.21,11.09 5.12,11.05H5.11L4.5,10.77C4.27,10.68 4.04,10.62 3.8,10.61C2.84,10.58 2.03,11.34 2,12.31C2,13.03 2.4,13.69 3.06,13.97L14.45,19.04L19.04,14.45L13.97,3.06C13.69,2.39 13,1.97 12.3,2M13.13,6.1C13.55,6.09 13.93,6.33 14.09,6.71L17.14,13.55L13.19,9.61L12.26,7.5C11.96,6.87 12.42,6.12 13.13,6.1M9.85,8.85C10.12,8.85 10.37,8.95 10.56,9.15L15.37,13.96C15.77,14.34 15.78,14.97 15.4,15.37C15,15.77 14.38,15.78 13.96,15.37L9.15,10.56C8.75,10.18 8.74,9.54 9.13,9.15C9.32,8.95 9.58,8.85 9.85,8.85M7.13,12.17C7.26,12.17 7.4,12.21 7.5,12.26L9.63,13.2L13.57,17.14L6.71,14.09C5.69,13.65 6.03,12.14 7.13,12.17M20.28,16.04L16.04,20.28L16.89,21.13C17.65,21.88 18.75,22.17 19.78,21.9C20.81,21.62 21.62,20.81 21.9,19.78C22.17,18.75 21.88,17.65 21.13,16.89L20.28,16.04Z"
                          />
                        </svg>
                        <span>Badminton</span>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        <svg viewBox="0 0 24 24">
                          <path
                            fill="currentColor"
                            d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M13.6,20.35C15.96,18.04 17.69,15.08 18.5,11.76C17.84,11.62 17.18,11.54 16.5,11.5C15.56,15.11 13.41,18.22 10.5,20.37C11,20.45 11.5,20.5 12,20.5C12.55,20.5 13.08,20.45 13.6,20.35M9.23,20.04C12.23,18.07 14.5,15.05 15.46,11.5C14.71,11.55 13.97,11.65 13.27,11.81C12.18,14.89 9.97,17.44 7.13,18.97C7.77,19.42 8.5,19.78 9.23,20.04M20.5,12.37C20.16,12.23 19.81,12.11 19.46,12C18.76,14.9 17.39,17.53 15.54,19.73C18.36,18.44 20.35,15.64 20.5,12.37M3.56,11.04C3.5,11.35 3.5,11.68 3.5,12C3.5,14.5 4.57,16.73 6.27,18.28C6.86,18 7.41,17.66 7.94,17.29C6.08,15.54 4.58,13.41 3.56,11.04M5.33,6.74C4.73,7.5 4.26,8.35 3.95,9.28C4.92,12.13 6.58,14.66 8.74,16.67C9.25,16.24 9.72,15.77 10.15,15.26C7.74,13.03 6,10.08 5.33,6.74M8.04,4.5C7.36,4.85 6.73,5.3 6.18,5.82C6.71,9.21 8.37,12.23 10.77,14.47C11.17,13.91 11.5,13.32 11.82,12.7C9.68,10.56 8.28,7.69 8.04,4.5M19.96,9.03C18.7,8.68 17.37,8.5 16,8.5C14.1,8.5 12.28,8.85 10.61,9.5C10.96,10.1 11.35,10.67 11.8,11.2C13.12,10.75 14.53,10.5 16,10.5C17.57,10.5 19.08,10.78 20.47,11.29C20.4,10.5 20.23,9.74 19.96,9.03M17.54,5.57C17.03,5.5 16.5,5.5 16,5.5C13.69,5.5 11.47,5.94 9.44,6.73C9.62,7.38 9.86,8 10.14,8.61C11.96,7.89 13.93,7.5 16,7.5C17.18,7.5 18.32,7.63 19.42,7.87C18.93,7 18.29,6.21 17.54,5.57M16,4.5C14.79,3.87 13.44,3.5 12,3.5C10.95,3.5 9.94,3.7 9,4.05C9.04,4.63 9.11,5.2 9.21,5.75C11.31,4.95 13.6,4.5 16,4.5Z"
                          />
                        </svg>
                        <span>Volleyball</span>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        <svg viewBox="0 0 24 24">
                          <path
                            fill="currentColor"
                            d="M18.5,14C19.9,14 21,15.1 21,16.5C21,17.9 19.9,19 18.5,19C17.1,19 16,17.9 16,16.5C16,15.1 17.1,14 18.5,14M7,15C7,15 8,16 8,17V20.5C8,21.3 8.7,22 9.5,22C10.3,22 11,21.3 11,20.5V17C11,16 12,15 12,15H7M8,14H11C11,14 16,14 16,9C16,4 12,2 9.5,2C7,2 3,4 3,9C3,14 8,14 8,14Z"
                          />
                        </svg>
                        <span>Table Tennis</span>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        <svg viewBox="0 0 24 24">
                          <path
                            fill="currentColor"
                            d="M6,7H18A5,5 0 0,1 23,12A5,5 0 0,1 18,17C16.36,17 14.91,16.21 14,15H10C9.09,16.21 7.64,17 6,17A5,5 0 0,1 1,12A5,5 0 0,1 6,7M19.75,9.5A1.25,1.25 0 0,0 18.5,10.75A1.25,1.25 0 0,0 19.75,12A1.25,1.25 0 0,0 21,10.75A1.25,1.25 0 0,0 19.75,9.5M17.25,12A1.25,1.25 0 0,0 16,13.25A1.25,1.25 0 0,0 17.25,14.5A1.25,1.25 0 0,0 18.5,13.25A1.25,1.25 0 0,0 17.25,12M5,9V11H3V13H5V15H7V13H9V11H7V9H5Z"
                          />
                        </svg>
                        <span>E-sport</span>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        <svg viewBox="0 0 24 24">
                          <path
                            fill="currentColor"
                            d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12C22,10.84 21.79,9.69 21.39,8.61L19.79,10.21C19.93,10.8 20,11.4 20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4C12.6,4 13.2,4.07 13.79,4.21L15.4,2.6C14.31,2.21 13.16,2 12,2M19,2L15,6V7.5L12.45,10.05C12.3,10 12.15,10 12,10A2,2 0 0,0 10,12A2,2 0 0,0 12,14A2,2 0 0,0 14,12C14,11.85 14,11.7 13.95,11.55L16.5,9H18L22,5H19V2M12,6A6,6 0 0,0 6,12A6,6 0 0,0 12,18A6,6 0 0,0 18,12H16A4,4 0 0,1 12,16A4,4 0 0,1 8,12A4,4 0 0,1 12,8V6Z"
                          />
                        </svg>
                        <span>Archery</span>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        <svg viewBox="0 0 24 24">
                          <path
                            fill="currentColor"
                            d="M15.83 10.43A6.93 6.93 0 0 1 18.39 14.86A6.64 6.64 0 0 1 17.5 19.5L15.78 18.5A5 5 0 0 0 16.44 16A5.22 5.22 0 0 0 15.46 13.06L9.18 23.93L7.44 22.95L10.44 17.75L8.71 16.76L7.21 19.34L5.5 18.36L10.63 9.45A7 7 0 0 1 8.8 5.46A6.91 6.91 0 0 1 9.69 1.1L11.43 2.13A4.84 4.84 0 0 0 10.91 5.9A4.74 4.74 0 0 0 13.21 8.93M16 5A2 2 0 1 0 18 7A2 2 0 0 0 16 5M13.5 1A1.5 1.5 0 1 0 15 2.5A1.5 1.5 0 0 0 13.5 1Z"
                          />
                        </svg>
                        <span>Handball</span>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        <svg viewBox="0 0 24 24">
                          <path
                            fill="currentColor"
                            d="M2.34,14.63C2.94,14.41 3.56,14.3 4.22,14.3C5.56,14.3 6.73,14.72 7.73,15.56L4.59,18.7C3.53,17.5 2.78,16.13 2.34,14.63M15.56,9.8C17.53,11.27 19.66,11.63 21.94,10.88C21.97,11.09 22,11.47 22,12C22,13.03 21.75,14.18 21.28,15.45C20.81,16.71 20.23,17.73 19.55,18.5L13.22,12.19L15.56,9.8M8.77,16.64C9.83,18.17 10.05,19.84 9.42,21.66C8,21.25 6.73,20.61 5.67,19.73L8.77,16.64M12.19,13.22L18.5,19.55C16.33,21.45 13.78,22.25 10.88,21.94C11.09,21.28 11.2,20.56 11.2,19.78C11.2,19.16 11.06,18.43 10.78,17.6C10.5,16.77 10.17,16.09 9.8,15.56L12.19,13.22M8.81,14.5C7.88,13.67 6.8,13.15 5.58,12.91C4.36,12.68 3.19,12.75 2.06,13.13C2.03,12.91 2,12.53 2,12C2,10.97 2.25,9.82 2.72,8.55C3.19,7.29 3.77,6.27 4.45,5.5L11.11,12.19L8.81,14.5M15.56,7.73C14.22,6.08 13.91,4.28 14.63,2.34C15.25,2.5 15.96,2.8 16.76,3.26C17.55,3.71 18.2,4.16 18.7,4.59L15.56,7.73M21.66,9.38C21.06,9.59 20.44,9.7 19.78,9.7C18.69,9.7 17.64,9.38 16.64,8.72L19.73,5.67C20.61,6.77 21.25,8 21.66,9.38M12.19,11.11L5.5,4.45C7.67,2.55 10.22,1.75 13.13,2.06C12.91,2.72 12.8,3.44 12.8,4.22C12.8,4.94 12.96,5.75 13.29,6.66C13.62,7.56 14,8.28 14.5,8.81L12.19,11.11Z"
                          />
                        </svg>
                        <span>Basketball</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </nav>
              <button className="btn btn--icon btn--primary btn--round-lg btn--add">
                <svg viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M17,14H19V17H22V19H19V22H17V19H14V17H17V14M12,17V15H7V17H12M17,11H7V13H14.69C13.07,14.07 12,15.91 12,18C12,19.09 12.29,20.12 12.8,21H5C3.89,21 3,20.1 3,19V5C3,3.89 3.89,3 5,3H19A2,2 0 0,1 21,5V12.8C20.12,12.29 19.09,12 18,12L17,12.08V11M17,9V7H7V9H17Z"
                  />
                </svg>
              </button>
            </div>
            <main className="dashboard">
            {children}
            </main>
          </div>
        </Providers>
      </body>
    </html>
  );
}
