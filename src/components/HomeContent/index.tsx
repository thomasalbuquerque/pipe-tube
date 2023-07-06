import React from 'react';
import { MenuWidth } from '@/helpers/MenuWidth';
interface props {
  menuOpen: boolean;
}

const HomeContent = ({ menuOpen }: props) => {
  return (
    <>
      <div
        className={`absolute duration-200 ${
          menuOpen
            ? 'left-' + MenuWidth.menuOpen
            : 'left-' + MenuWidth.menuClosed
        }`}>
        __________Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Temporibus, ipsum dolores? Deserunt, quos numquam. Earum, delectus
        blanditiis. Beatae, laudantium quasi dolorem natus modi, impedit tempora
        facilis possimus, sint ipsam at. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Temporibus, ipsum dolores? Deserunt, quos numquam.
        Earum, delectus blanditiis. Beatae, laudantium quasi dolorem natus modi,
        impedit tempora facilis possimus, sint ipsam at. Lorem ipsum dolor sit
        amet consectetur adipisicing elit. Temporibus, ipsum dolores? Deserunt,
        quos numquam. Earum, delectus blanditiis. Beatae, laudantium quasi
        dolorem natus modi, impedit tempora facilis possimus, sint ipsam at.
        __________Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Temporibus, ipsum dolores? Deserunt, quos numquam. Earum, delectus
        blanditiis. Beatae, laudantium quasi dolorem natus modi, impedit tempora
        facilis possimus, sint ipsam at. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Temporibus, ipsum dolores? Deserunt, quos numquam.
        Earum, delectus blanditiis. Beatae, laudantium quasi dolorem natus modi,
        impedit tempora facilis possimus, sint ipsam at. Lorem ipsum dolor sit
        amet consectetur adipisicing elit. Temporibus, ipsum dolores? Deserunt,
        quos numquam. Earum, delectus blanditiis. Beatae, laudantium quasi
        dolorem natus modi, impedit tempora facilis possimus, sint ipsam at.
        __________Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Temporibus, ipsum dolores? Deserunt, quos numquam. Earum, delectus
        blanditiis. Beatae, laudantium quasi dolorem natus modi, impedit tempora
        facilis possimus, sint ipsam at. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Temporibus, ipsum dolores? Deserunt, quos numquam.
        Earum, delectus blanditiis. Beatae, laudantium quasi dolorem natus modi,
        impedit tempora facilis possimus, sint ipsam at. Lorem ipsum dolor sit
        amet consectetur adipisicing elit. Temporibus, ipsum dolores? Deserunt,
        quos numquam. Earum, delectus blanditiis. Beatae, laudantium quasi
        dolorem natus modi, impedit tempora facilis possimus, sint ipsam at.
        __________Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Temporibus, ipsum dolores? Deserunt, quos numquam. Earum, delectus
        blanditiis. Beatae, laudantium quasi dolorem natus modi, impedit tempora
        facilis possimus, sint ipsam at. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Temporibus, ipsum dolores? Deserunt, quos numquam.
        Earum, delectus blanditiis. Beatae, laudantium quasi dolorem natus modi,
        impedit tempora facilis possimus, sint ipsam at. Lorem ipsum dolor sit
        amet consectetur adipisicing elit. Temporibus, ipsum dolores? Deserunt,
        quos numquam. Earum, delectus blanditiis. Beatae, laudantium quasi
        dolorem natus modi, impedit tempora facilis possimus, sint ipsam at.em
        natus modi, impedit tempora facilis possimus, sint ipsam at. Lorem ipsum
        dolor sit amet consectetur adipisicing elit. Temporibus, ipsum dolores?
        Deserunt, quos numquam. Earum, delectus blanditiis. Beatae, laudantium
        quasi dolorem natus modi, impedit tempora facilis possimus, sint ipsam
        at. Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus,
        ipsum dolores? Deserunt, quos numquam. Earum, delectus blanditiis.
        Beatae, laudantium quasi dolorem natus modi, impedit tempora facilis
        possimus, sint ipsam at. __________Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Temporibus, ipsum dolores? Deserunt, quos
        numquam. Earum, delectus blanditiis. Beatae, laudantium quasi dolorem
        natus modi, impedit tempora facilis possimus, sint ipsam at. Lorem ipsum
        dolor sit amet consectetur adipisicing elit. Temporibus, ipsum dolores?
        Deserunt, quos numquam. Earum, delectus blanditiis. Beatae, laudantium
        quasi dolorem natus modi, impedit tempora facilis possimus, sint ipsam
        at. Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus,
        ipsum dolores? Deserunt, quos numquam. Earum, delectus blanditiis.
        Beatae, laudantium quasi dolorem natus modi, impedit tempora facilis
        possimus, sint ipsam at. __________Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Temporibus, ipsum dolores? Deserunt, quos
        numquam. Earum, delectus blanditiis. Beatae, laudantium quasi dolorem
        natus modi, impedit tempora facilis possimus, sint ipsam at. Lorem ipsum
        dolor sit amet consectetur adipisicing elit. Temporibus, ipsum dolores?
        Deserunt, quos numquam. Earum, delectus blanditiis. Beatae, laudantium
        quasi dolorem natus modi, impedit tempora facilis possimus, sint ipsam
        at. Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus,
        ipsum dolores? Deserunt, quos numquam. Earum, delectus blanditiis.
        Beatae, laudantium quasi dolorem natus modi, impedit tempora facilis
        possimus, sint ipsam at.
      </div>
    </>
  );
};

export default HomeContent;
