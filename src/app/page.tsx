'use client'
import React, { useEffect, useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Button,
  Accordion,
  AccordionItem,
  Input
} from "@heroui/react";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import Image from "next/image";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    "Thrift with us",
    "Donate",
    "Impact",
    "Get involved",
    "About us",
    "Contact",
  ];

  const [width, setWidth] = useState(556); // Default width for web
  const [height, setHeight] = useState(556); // Default height for web

  useEffect(() => {
    // Function to update dimensions based on screen size
    const updateDimensions = () => {
      if (window.innerWidth <= 768) {
        setWidth(400); // Width for mobile
        setHeight(400); // Height for mobile
      } else {
        setWidth(556); // Width for web
        setHeight(556); // Height for web
      }
    };

    // Set initial dimensions
    updateDimensions();

    // Add event listener for window resize
    window.addEventListener('resize', updateDimensions);

    // Cleanup event listener
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  return (
    <div className="">
      <Navbar className="bg-white" isBlurred onMenuOpenChange={setIsMenuOpen}>
        <NavbarContent justify="start">
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="sm:hidden"
            style={{ color: 'black' }}
          />
          <NavbarItem className="sm:flex mr-8">
            <NavbarBrand>
              <Image
                className="sm:block"
                src="/icon.svg"
                alt="renue"
                width={200}
                height={32}
              />
            </NavbarBrand>
          </NavbarItem>
          <NavbarContent className="hidden sm:flex gap-4">
            <NavbarItem>
              <Link className="font-bold text-black" color="foreground" href="#">
                Thrift with us
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link className="font-bold text-black" aria-current="page" href="#">
                Donate
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link className="font-bold text-black" color="foreground" href="#">
                Impact
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link className="font-bold text-black" color="foreground" href="#">
                Get involved
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link className="font-bold text-black" color="foreground" href="#">
                About us
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link className="font-bold text-black" color="foreground" href="#">
                Contact
              </Link>
            </NavbarItem>
          </NavbarContent>
        </NavbarContent>
        <NavbarMenu>
          {menuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                className="w-full text-black"
                color={
                  index === 2 ? "foreground" : index === menuItems.length - 1 ? "danger" : "foreground"
                }
                href="#"
                size="lg"
              >
                {item}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </Navbar>
      <Splide className="bg-white px-4" aria-label="My Favorite Images">
        <SplideSlide>
          <Image
            src="/img.png"
            alt="renue"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: '100%', height: 'auto' }}
          />
        </SplideSlide>
        <SplideSlide>
          <Image
            src="/img.png"
            alt="renue"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: '100%', height: 'auto' }}
          />
        </SplideSlide>
      </Splide>
      <div className="bg-white p-4 text-center text-black h-100vw pb-24">
        <div className="grid sm:grid-cols-2 md:grid-cols-4 container mx-auto py-16 gap-4">
          <div className="mb-12">
            <Image
              className="sm:block mx-auto mb-4"
              src="/stores.png"
              alt="renue"
              width={64}
              height={64}
            />
            <p className="text-xl font-inherit mb-8">Stores</p>
            <p className="text-5xl font-bold">4</p>
          </div>
          <div className="mb-12">
            <Image
              className="sm:block mx-auto mb-4"
              src="/donationbooths.png"
              alt="renue"
              width={64}
              height={64}
            />
            <p className="text-xl font-inherit mb-8">Donation booths</p>
            <p className="text-5xl font-bold">15</p>
          </div>
          <div className="mb-12">
            <Image
              className="sm:block mx-auto mb-4"
              src="/partners.png"
              alt="renue"
              width={64}
              height={64}
            />
            <p className="text-xl font-inherit mb-8">Partners</p>
            <p className="text-5xl font-bold">9</p>
          </div>
          <div className="">
            <Image
              className="sm:block mx-auto mb-4"
              src="/community.png"
              alt="renue"
              width={64}
              height={64}
            />
            <p className="text-xl font-inherit mb-8">Community</p>
            <p className="text-5xl font-bold">10,000+</p>
          </div>
        </div>
        <div className="bg-white container mx-auto text-center text-black">
          <p className="mx-24 text-center text-xl font-inherit mb-8">
            As the social enterprise arm of The Salvation Army, Re:Nue aims to
            <br />
            deliver excellent donation-in-kind service that meets underserved needs within our community.
          </p>
          <div className="w-100vw">
            <Button className="mx-auto bg-black text-white font-bold" radius="full" color="default" size="lg">
              About Re:Nue
            </Button>
          </div>
        </div>
      </div>
      <div className="bg-blue-800 h-full text-center text-white py-12">
        <div className="grid sm:grid-cols-1 md:grid-cols-2 h-screen container mx-auto gap-4">
          {window.innerWidth <= 768 ? <Image
            className="sm:block mx-auto my-auto rounded-3xl"
            src="/img-store.png"
            alt="renue"
            width={width}
            height={height}
          /> : null}
          <div
            className="flex flex-col justify-center sm:text-center md:text-start text-white"
          >
            <p className="text-3xl font-inherit mb-4">
              Re:Nue pillars
            </p>
            <p className="text-7xl font-inherit mb-8">
              Store
            </p>
            <p className="text-xl font-inherit mb-8">
              Creating a fun and interesting thrifting experience, targeted at current customers and reaching out to younger, new generations who are interested in thrifting and repurposing.
            </p>
            <div className="w-100vw mb-4">
              <Button className="mx-auto bg-white text-black font-bold" radius="full" color="default" size="lg">
                Donate your items
              </Button>
            </div>
          </div>
          {window.innerWidth > 768 ? <Image
            className="sm:block mx-auto my-auto rounded-3xl"
            src="/img-store.png"
            alt="renue"
            width={width}
            height={height}
          /> : null}
        </div>
      </div>
      <div className="bg-white h-screen text-center text-black py-16">
        <div className="container mx-auto">
          <p className="text-4xl font-bold mb-4">
            Our values
          </p>
          <p className="text-lg font-inherit mb-12">
            Guiding principles behind everything we do
          </p>
          <div className="w-100vw px-4">
            <Accordion variant="splitted">
              <AccordionItem
                key="Purposeful"
                className="bg-default-100 border-none mb-4"
                aria-label="Purposeful"
                title={
                  <p className="text-3xl text-black font-bold ml-2">
                    Purposeful
                  </p>
                }
                startContent={
                  <Image
                    className="sm:block mx-auto my-autos"
                    src="/purposeful.png"
                    alt="renue"
                    width={48}
                    height={48}
                  />
                }>
                <p className="text-lg text-start font-inherit mb-4">
                  We are committed to making a positive difference to the environment, to supporting and changing lives, and to inspiring change for a brighter future.
                </p>
              </AccordionItem>
              <AccordionItem
                key="Passionate"
                className="bg-default-100 border-none mb-4"
                aria-label="Passionate"
                title={
                  <p className="text-3xl text-black font-bold ml-2">
                    Passionate
                  </p>
                }
                startContent={
                  <Image
                    className="sm:block mx-auto my-autos"
                    src="/passionate.png"
                    alt="renue"
                    width={48}
                    height={48}
                  />
                }>
                <p className="text-lg text-start font-inherit mb-4">
                  We are committed to making a positive difference to the environment, to supporting and changing lives, and to inspiring change for a brighter future.
                </p>
              </AccordionItem>
              <AccordionItem
                key="Caring"
                className="bg-default-100 border-none mb-4"
                aria-label="Caring"
                title={
                  <p className="text-3xl text-black font-bold ml-2">
                    Caring
                  </p>
                }
                startContent={
                  <Image
                    className="sm:block mx-auto my-autos"
                    src="/caring.png"
                    alt="renue"
                    width={48}
                    height={48}
                  />
                }>
                <p className="text-lg text-start font-inherit mb-4">
                  We are committed to making a positive difference to the environment, to supporting and changing lives, and to inspiring change for a brighter future.
                </p>
              </AccordionItem>
              <AccordionItem
                key="Authentic"
                className="bg-default-100 border-none mb-4"
                aria-label="Authentic"
                title={
                  <p className="text-3xl text-black font-bold ml-2">
                    Authentic
                  </p>
                }
                startContent={
                  <Image
                    className="sm:block mx-auto my-autos"
                    src="/authentic.png"
                    alt="renue"
                    width={48}
                    height={48}
                  />
                }>
                <p className="text-lg text-start font-inherit mb-4">
                  We are committed to making a positive difference to the environment, to supporting and changing lives, and to inspiring change for a brighter future.
                </p>
              </AccordionItem>
              <AccordionItem
                key="Inclusive"
                className="bg-default-100 border-none mb-4"
                aria-label="Inclusive"
                title={
                  <p className="text-3xl text-black font-bold ml-2">
                    Inclusive
                  </p>
                }
                startContent={
                  <Image
                    className="sm:block mx-auto my-autos"
                    src="/inclusive.png"
                    alt="renue"
                    width={48}
                    height={48}
                  />
                }>
                <p className="text-lg text-start font-inherit mb-4">
                  We are committed to making a positive difference to the environment, to supporting and changing lives, and to inspiring change for a brighter future.
                </p>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
      <div className="flex items-center bg-cover bg-center bg-white h-48 text-center text-white py-4" style={{ backgroundImage: 'url(/faq.png)' }}>
        <div className="container mx-auto my-auto">
          <p className="text-4xl font-bold mb-4">
            Questions on your mind?
          </p>
          <div className="w-100vw mb-4">
            <Button className="mx-auto bg-white text-black font-bold" radius="full" color="default" size="lg">
              See our FAQs
            </Button>
          </div>
        </div>
      </div>
      <div className="bg-yellow-500 h-full text-center text-white py-12 px-4">
        <div className="grid sm:grid-cols-1 md:grid-cols-2 h-full container mx-auto">
          <Image
            className="sm:block mx-auto my-auto rounded-3xl my-8"
            src="/bepartcommunity.png"
            alt="renue"
            width={width}
            height={height}
          />
          <div
            className="flex flex-col justify-center text-start text-black my-8"
          >
            <p className="text-5xl font-bold mb-8">
              Be part of the community
            </p>
            <p className="text-lg font-inherit mb-8">
              Join the Re:Nue community and unlock a world of exclusive perks and discounts when you shop with us!
            </p>
            <p className="text-lg font-inherit mb-2">
              Full name
            </p>
            <Input
              className="mb-4"
              color="default"
              key='fullname'
              placeholder="Enter your full name"
              type="text"
              radius="full"
            />
            <p className="text-lg font-inherit mb-2">
              Sign up with
            </p>
            <div className="flex flex-col space-y-2 md:flex-row md:space-x-4 md:space-y-0">
              <div className="flex items-center space-x-2 text-black mb-4">
                <input type="radio" id="email" name="choice" className="form-radio h-5 w-5 text-black" />
                <label key='email' className="text-black">Email</label>
                <input type="radio" id="mobilenumber" name="choice" className="form-radio h-5 w-5 text-black" />
                <label key='mobilenumber' className="text-black">Mobile number</label>
              </div>
            </div>
            <Input
              className="mb-4"
              color="default"
              key='email'
              placeholder="Enter your email address"
              type="email"
              radius="full"
            />
            <div className="flex flex-col space-y-2 md:flex-row md:space-x-4 md:space-y-0">
              <div className="flex items-center space-x-2 text-black mb-8">
                <input type="checkbox" id="terms" name="terms" className="form-checkbox text-black" />
                <label key='mobilenumber' className="text-black">
                  By registering through this membership application form, you agree that The Salvation Army Red Shield Industries Singapore may collect, use and disclose your personal data, as provided in this application form, for the following purposes in accordance with the Personal Data Protection Act 2012.
                </label>
              </div>
            </div>

            <div className="w-100vw mb-4">
              <Button className="w-full bg-black text-white font-bold" radius="full" color="default" size="lg">
                Join now
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-black h-full text-white py-12 px-4">
        <div className="grid sm:grid-cols-1 md:grid-cols-4 h-full container mx-auto gap-2">
          <div className="col-span-1 mb-8">
            <div className="sm:text-center md:text-start">
              <Image
                className="bg-white rounded p-4 mb-8"
                src="/icon.svg"
                alt="renue"
                width={197}
                height={35}
                style={{ color: 'white' }}
              />
              <p className="text-xl font-inherit mb-8">
                Re:Nue, a social enterprise under The Salvation Army, is passionate about sustainability and community impact since 1996. By re-purposing and reselling your generous donations, we generate funds to support vital programs for the community, including children, youth, the elderly, migrant workers, and ex-offenders.
              </p>
              <div className="flex sm:flex-row space-x-4 md:space-y-0">
                <Image
                  src="/facebook.png"
                  alt="renue"
                  width={32}
                  height={32}
                  style={{ color: 'white' }}
                />
                <Image
                  src="/instagram.png"
                  alt="renue"
                  width={32}
                  height={32}
                  style={{ color: 'white' }}
                />
              </div>
            </div>
          </div>
          <div className="md:col-start-3 col-span-3 grid sm:grid-cols-1 md:grid-cols-3">
            <div>
              <p className="text-xl font-bold mb-8">
                Company
              </p>
              <Link href="#" className="flex text-lg text-white font-inherit mb-4">
                <p className="text-lg font-inherit">
                  FAQs
                </p>
              </Link>
              <Link href="#" className="flex text-lg text-white font-inherit mb-4">
                <p className="text-lg font-inherit">
                  About us
                </p>
              </Link>
              <Link href="#" className="flex text-lg text-white font-inherit mb-4">
                <p className="text-lg font-inherit">
                  The Salvation Army
                </p>
              </Link>
            </div>
            <div>
              <p className="text-xl font-bold mb-8">
                Join us
              </p>
              <Link href="#" className="flex text-lg text-white font-inherit mb-4">
                <p className="text-lg font-inherit">
                  Volunteer
                </p>
              </Link>
              <Link href="#" className="flex text-lg text-white font-inherit mb-4">
                <p className="text-lg font-inherit">
                  Coorporate partnerships
                </p>
              </Link>
              <Link href="#" className="flex text-lg text-white font-inherit mb-4">
                <p className="text-lg font-inherit">
                  Join as staff
                </p>
              </Link>
            </div>
            <div>
              <p className="text-xl font-bold mb-8">
                Contact
              </p>
              <Link href="#" className="flex text-lg text-white font-inherit mb-4">
                <Image
                  className="flex mr-2"
                  src="/mail.png"
                  alt="renue"
                  width={32}
                  height={32}
                  style={{ color: 'white' }}
                />
                <p className="flex text-lg font-inherit">
                  customercare@smm.salvationarmy.org
                </p>
              </Link>
              <Link href="#" className="flex text-lg text-white font-inherit mb-4">
                <Image
                  className="flex mr-2"
                  src="/phone.png"
                  alt="renue"
                  width={32}
                  height={32}
                  style={{ color: 'white' }}
                />
                <p className="flex text-lg font-inherit">
                  +65 6288 5438
                </p>
              </Link>
              <Link href="#" className="flex text-lg text-white font-inherit mb-4">
                <Image
                  className="flex mr-2"
                  src="/maps.png"
                  alt="renue"
                  width={32}
                  height={32}
                  style={{ color: 'white' }}
                />
                <p className="text-lg font-inherit">
                  356 Tanglin Road, Singapore 247674
                  Operation Hours: 8:30 am - 5:30 pm (Mon-Sat)
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-default-700 h-full text-center text-white p-4">
        <p className="text-lg font-inherit">
          © 2025 Re:Nue. All rights reserved
        </p>
      </div>
    </div>
  );
}