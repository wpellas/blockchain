import { card } from '../assets';
import styles, { layout } from '../style';
import Button from './Button';

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        The perfect blockchain <br className='sm:block hidden' />in just a few steps.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Our state of the art algorithm ensures each customer has access to the best blockchain for their needs. By filtering out according to preference, we're able to find a blockchain that fits your lifestyle the best.
      </p>
      <Button styles="mt-10" />
    </div>
    <div className={layout.sectionImg}>
      <img src={card} alt="card" className='w-[100%] h-[100%]' />
    </div>
  </section>
)


export default CardDeal