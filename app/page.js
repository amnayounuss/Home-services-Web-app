"use client"

import { useEffect } from "react";
import CategoryList from "./_components/CategoryList";
import Hero from "./_components/Hero";
import GlobalApi from "./_services/GlobalApi";



export default function Home() {

  useEffect(() => {
    getCategoryList();
  }, []);

  const getCategoryList = () => {
    GlobalApi.getCategory().then(resp => {
      console.log(resp.categories);
    })
  }

  return (
    <>
      <Hero />
      <CategoryList />
    </>
  )
}
