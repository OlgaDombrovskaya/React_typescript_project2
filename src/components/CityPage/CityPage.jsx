import Berlin2 from "'./img/ber2.jpg'"
import {CityClass, CityClassImg} from "./styles.ts"

export default function CityPage() {
  return (
    <CityClass>
        <h1>Все о городе</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Explicabo omnis, magni fuga voluptatem alias perferendis
        accusantium quam numquam animi. Odit?</p>
      <img src="/ber.jpg" alt="" />
      <img src={Berlin2} alt="" />
    </CityClass>
  )
}
