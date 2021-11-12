import { useEffect, useState } from "react";
import Head from "next/head";
// import Image from "next/image";
// import styles from "../styles/Home.module.css";
import Navbar from "../components/navbar";
import { connect } from "react-redux";
import { counterAction } from "../store/counter";

function Home({ counter, incrementCounter, decrementCounter, refreshCounter }) {
  useEffect(() => {
    console.log(counter);
  }, [counter]);

  useEffect(() => {
    // const cars = ["lambo", "honda", "ford"];
    // console.log(cars.includes("honda"));
    // console.log(cars.includes("ferrari"));

    // const numbers = [2, 4, 5, 6, 7];
    // const find = numbers.find((num) => num % 2 !== 0);
    // console.log(find); // 5

    // const filter = numbers.filter((num) => num % 2 !== 0);
    // console.log(filter); // 5,7

    // const reduce = numbers.reduce((previosValue, currentValue) => {
    //   return previosValue + currentValue;
    // });
    // console.log(reduce); 

    // const arr
  }, []);

  const handleCountUp = () => {
    incrementCounter();
  };

  const handleCountDown = () => {
    decrementCounter();
  };

  const handleRefreshCounter = () => {
    refreshCounter();
  };

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar counter={counter.value} />
      <div>
        <h1>Counter : {counter.value}</h1>
        <button onClick={handleCountUp}>Count up!</button>
        <button onClick={handleCountDown}>Count down!</button>
        <button onClick={handleRefreshCounter}>Refresh!</button>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  counter: state.counter,
});

export default connect(mapStateToProps, { ...counterAction })(Home);