import * as React from "react";
import classes, {createScopedClasses} from 'utils/classnames'
import {RouteComponentProps} from "react-router";

import Carousel from '@/components/carousel/index'
import CarouselItem from '@/components/carousel/carouselItem'

import './index.scss'

const componentName = 'Home'
const sc = createScopedClasses(componentName)

interface Props extends RouteComponentProps {

}

const Home: React.FunctionComponent<Props> = props => {

  return (
    <div className={classes(sc('wrapper'))}>
      <div className={classes(sc('content'))}>

        <Carousel style={{ height: 300 }}>
          <CarouselItem style={{ background: '#666', display: 'flex', fontSize: '.6rem' }}>page 1</CarouselItem>
          <CarouselItem style={{ background: '#666', display: 'flex', fontSize: '.6rem' }}>page 2</CarouselItem>
          <CarouselItem style={{ background: '#666', display: 'flex', fontSize: '.6rem' }}>page 3</CarouselItem>
          <CarouselItem style={{ background: '#666', display: 'flex', fontSize: '.6rem' }}>page 4</CarouselItem>
        </Carousel>
        <h2>haha </h2>
        <Carousel style={{ height: 300 }} animation="fade">
          <CarouselItem style={{ background: '#666', display: 'flex', fontSize: '.6rem' }}>page 1</CarouselItem>
          <CarouselItem style={{ background: 'red', display: 'flex', fontSize: '.6rem' }}>page 2</CarouselItem>
          <CarouselItem style={{ background: 'pink', display: 'flex', fontSize: '.6rem' }}>page 3</CarouselItem>
          <CarouselItem style={{ background: 'green', display: 'flex', fontSize: '.6rem' }}>page 4</CarouselItem>
        </Carousel>

        <h1>home</h1>
      </div>
    </div>
  );
}
export default Home
