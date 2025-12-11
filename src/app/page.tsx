"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import HeroShowcaseSplitOverlay from '@/components/sections/hero/HeroShowcaseSplitOverlay';
import ProductCardFour from '@/components/sections/product/ProductCardFour';
import MediaAbout from '@/components/sections/about/MediaAbout';
import FeatureCardThirteen from '@/components/sections/feature/FeatureCardThirteen';
import TestimonialCardThirteen from '@/components/sections/testimonial/TestimonialCardThirteen';
import FaqDouble from '@/components/sections/faq/FaqDouble';
import ContactInline from '@/components/sections/contact/ContactInline';
import FooterCard from '@/components/sections/footer/FooterCard';
import { Facebook, HelpCircle, Heart, Instagram, Sparkles, Star, Twitter } from "lucide-react";

export default function CoffeeShopPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="hover-magnetic"
      defaultTextAnimation="reveal-blur"
      borderRadius="soft"
      contentWidth="large"
      sizing="mediumSizeExtraLargeTitles"
      background="noiseDiagonalGradient"
      cardStyle="solid-accent"
      primaryButtonStyle="flat"
      secondaryButtonStyle="solid"
      headingFontWeight="bold"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          navItems={[
            { name: "Home", id: "home" },
            { name: "Menu", id: "menu" },
            { name: "About", id: "about" },
            { name: "Contact", id: "contact" }
          ]}
          logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765446186993-wzz9va87.jpg"
          logoAlt="Coffee Shop Logo"
          brandName="Coffee Haven"
          button={{
            text: "Order Now",
            href: "#menu"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroShowcaseSplitOverlay
          title="Craft best coffee in your life"
          description="Discover our handcrafted coffee blends and welcoming atmosphere. From rich espresso to smooth cold brew, every cup is made with care."
          tags={["Specialty Coffee", "Fresh Roasted", "Local Favorite", "Cozy Vibes"]}
          buttons={[
            { text: "Explore Menu", href: "#menu" },
            { text: "Visit Us", href: "#contact" }
          ]}
          showcaseImageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765446188834-xdf8ff0i.jpg"
          showcaseImageAlt="Coffee shop interior with warm lighting"
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765446188834-xdf8ff0i.jpg"
          imageAlt="Coffee shop background"
          showDimOverlay={false}
        />
      </div>

      <div id="menu" data-section="menu">
        <ProductCardFour
          title="Featured Menu Items"
          description="Try our most popular coffee creations, carefully crafted to perfection"
          tag="Best Sellers"
          tagIcon={Sparkles}
          products={[
            {
              id: "1",
              name: "Classic Espresso",
              price: "$3.50",
              variant: "Double Shot, Single Shot",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765446190240-n3n8yut6.jpg",
              imageAlt: "Double espresso shot"
            },
            {
              id: "2",
              name: "Creamy Latte",
              price: "$4.75",
              variant: "Hot, Iced, Vanilla",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765446191730-jn8vjykq.jpg",
              imageAlt: "Latte with latte art"
            },
            {
              id: "3",
              name: "Cold Brew",
              price: "$4.25",
              variant: "Classic, Flavored",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765446193425-tycau700.jpg",
              imageAlt: "Cold brew iced coffee"
            }
          ]}
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          containerStyle="default"
          textboxLayout="default"
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="about" data-section="about">
        <MediaAbout
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765446195819-r2a8295d.jpg"
          imageAlt="Freshly roasted coffee beans"
          buttons={[
            { text: "Learn Our Story", href: "#" }
          ]}
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="features" data-section="features">
        <FeatureCardThirteen
          title="Why Coffee Haven"
          description="Experience what makes us different"
          tag="Our Difference"
          tagIcon={Heart}
          features={[
            {
              id: "01",
              title: "Single Origin Beans",
              description: "We source ethically traded, single-origin beans from the world's best coffee regions for exceptional flavor."
            },
            {
              id: "02",
              title: "Expert Baristas",
              description: "Our certified baristas craft every drink with precision and passion, ensuring consistent quality every time."
            },
            {
              id: "03",
              title: "Cozy Atmosphere",
              description: "Our warm, inviting space is perfect for working, studying, or simply enjoying great coffee with friends."
            },
            {
              id: "04",
              title: "Fresh Daily",
              description: "We roast our beans on-site every morning to guarantee the freshest, most flavorful coffee possible."
            }
          ]}
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          containerStyle="default"
          textboxLayout="default"
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardThirteen
          title="What Our Customers Say"
          description="Join thousands of coffee lovers who trust Coffee Haven"
          tag="Customer Love"
          tagIcon={Star}
          testimonials={[
            {
              id: "1",
              name: "Sarah Mitchell",
              handle: "@sarahloves.coffee",
              testimonial: "The best coffee shop in town! The baristas truly care about their craft and it shows in every cup.",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765446197436-k5xquddz.jpg",
              imageAlt: "Sarah Mitchell"
            },
            {
              id: "2",
              name: "James Chen",
              handle: "@jamescoffee",
              testimonial: "I visit every morning. Their espresso is consistently perfect and the atmosphere is so welcoming.",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765446198935-27x1o320.jpg",
              imageAlt: "James Chen"
            },
            {
              id: "3",
              name: "Emma Rodriguez",
              handle: "@emmacafekind",
              testimonial: "Finally found my coffee sanctuary. The cold brew is incredibly smooth and the staff is always friendly.",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765446200169-v0i8i1qc.jpg",
              imageAlt: "Emma Rodriguez"
            },
            {
              id: "4",
              name: "Michael Thompson",
              handle: "@michaelt.coffee",
              testimonial: "Worth every penny. Single-origin beans that actually taste different from mainstream coffee chains.",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765446201283-jv7yxl0i.jpg",
              imageAlt: "Michael Thompson"
            }
          ]}
          animationType="slide-up"
          containerStyle="default"
          textboxLayout="default"
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqDouble
          title="Coffee Questions Answered"
          description="Everything you need to know about our coffee and cafe"
          tag="FAQs"
          tagIcon={HelpCircle}
          faqs={[
            {
              id: "1",
              title: "What brewing methods do you use?",
              content: "We use multiple brewing methods including espresso machines, pour-over, AeroPress, and French press to bring out the best flavors in each bean type."
            },
            {
              id: "2",
              title: "Do you offer dairy-free options?",
              content: "Yes! We have almond, oat, soy, and coconut milk available for all our coffee drinks at no extra charge."
            },
            {
              id: "3",
              title: "Can I buy beans to take home?",
              content: "Absolutely. We sell freshly roasted whole beans and ground coffee in various sizes. Ask our baristas for recommendations based on your brewing method."
            },
            {
              id: "4",
              title: "Do you have WiFi for working?",
              content: "Yes, we offer free high-speed WiFi perfect for remote work. We have plenty of comfortable seating and outlets throughout the cafe."
            },
            {
              id: "5",
              title: "What are your hours?",
              content: "We're open Monday-Friday 6am-8pm, Saturday 7am-9pm, and Sunday 8am-7pm. We're closed on major holidays."
            },
            {
              id: "6",
              title: "Do you offer catering?",
              content: "Yes! We provide coffee catering for meetings, events, and parties. Contact us for custom quotes and menu options."
            }
          ]}
          textboxLayout="default"
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactInline
          text="Join Our Coffee Community"
          animationType="reveal-blur"
          inputPlaceholder="Enter your email"
          buttonText="Subscribe"
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterCard
          logoText="Coffee Haven"
          copyrightText="© 2025 Coffee Haven. All rights reserved."
          socialLinks={[
            {
              icon: Instagram,
              href: "https://instagram.com/coffeehaven",
              ariaLabel: "Instagram"
            },
            {
              icon: Twitter,
              href: "https://twitter.com/coffeehaven",
              ariaLabel: "Twitter"
            },
            {
              icon: Facebook,
              href: "https://facebook.com/coffeehaven",
              ariaLabel: "Facebook"
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}