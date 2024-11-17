import Layout from '../componen/layout'
import styles from '../componen/stylemodule/container.module.css';
import './button.css'


const Page = () => {
    return (
        <Layout>
            <div className={styles.container}>
                <h1>Button Components</h1>
                <div className='box'>
                    <div>
                        <h2>Default Buttons with Unique Colors</h2>
                        <button class="btn btn-1">Button 1</button>
                        <button class="btn btn-2">Button 2</button>
                        <button class="btn btn-3">Button 3</button>
                        <button class="btn btn-4">Button 4</button>
                        <button class="btn btn-5">Button 5</button>
                    </div>

                    <div>
                        <h2>Button Pills with Unique Colors</h2>
                        <button class="btn pills pills-1">Button 1</button>
                        <button class="btn pills pills-2">Button 2</button>
                        <button class="btn pills pills-3">Button 3</button>
                        <button class="btn pills pills-4">Button 4</button>
                        <button class="btn pills pills-5">Button 5</button>
                    </div>

                    <div>
                        <h2>Gradient Monochrome</h2>
                        <button class="btn gradient-monochrome gradient-monochrome-1">Button 1</button>
                        <button class="btn gradient-monochrome gradient-monochrome-2">Button 2</button>
                        <button class="btn gradient-monochrome gradient-monochrome-3">Button 3</button>
                        <button class="btn gradient-monochrome gradient-monochrome-4">Button 4</button>
                        <button class="btn gradient-monochrome gradient-monochrome-5">Button 5</button>
                    </div>

                    <div>
                        <h2>Gradient Duotone</h2>
                        <button class="btn gradient-duotone gradient-duotone-1">Button 1</button>
                        <button class="btn gradient-duotone gradient-duotone-2">Button 2</button>
                        <button class="btn gradient-duotone gradient-duotone-3">Button 3</button>
                        <button class="btn gradient-duotone gradient-duotone-4">Button 4</button>
                        <button class="btn gradient-duotone gradient-duotone-5">Button 5</button>
                    </div>

                    <div>
                        <h2>Social Buttons with Different Colors</h2>
                        <button class="btn social social-facebook">Facebook</button>
                        <button class="btn social social-twitter">Twitter</button>
                        <button class="btn social social-instagram">Instagram</button>
                        <button class="btn social social-linkedin">LinkedIn</button>
                        <button class="btn social social-youtube">YouTube</button>
                    </div>

                    <div>
                        <h2>Payment Buttons with Different Colors</h2>
                        <button class="btn payment payment-paypal">PayPal</button>
                        <button class="btn payment payment-visa">Visa</button>
                        <button class="btn payment payment-mastercard">MasterCard</button>
                        <button class="btn payment payment-amex">American Express</button>
                        <button class="btn payment payment-discover">Discover</button>
                    </div>

                    <div>
                        <h2>Gradient Outline Buttons with Different Colors</h2>
                        <button class="btn gradient-outline gradient-outline-1">Button 1</button>
                        <button class="btn gradient-outline gradient-outline-2">Button 2</button>
                        <button class="btn gradient-outline gradient-outline-3">Button 3</button>
                        <button class="btn gradient-outline gradient-outline-4">Button 4</button>
                        <button class="btn gradient-outline gradient-outline-5">Button 5</button>
                    </div>

                    <div>
                        <h2>Outline Buttons with Different Colors</h2>
                        <button class="btn outline outline-1">Button 1</button>
                        <button class="btn outline outline-2">Button 2</button>
                        <button class="btn outline outline-3">Button 3</button>
                        <button class="btn outline outline-4">Button 4</button>
                        <button class="btn outline outline-5">Button 5</button>
                    </div>

                    <div>
                        <h2>Loader Buttons with Different Colors</h2>
                        <button class="btn loader loader-1">Loading...</button>
                        <button class="btn loader loader-2">Loading...</button>
                        <button class="btn loader loader-3">Loading...</button>
                        <button class="btn loader loader-4">Loading...</button>
                        <button class="btn loader loader-5">Loading...</button>
                    </div>

                    <div>
                        <h2>Disabled Buttons with Different Backgrounds</h2>
                        <button class="btn disabled disabled-1" disabled>Disabled Button 1</button>
                        <button class="btn disabled disabled-2" disabled>Disabled Button 2</button>
                        <button class="btn disabled disabled-3" disabled>Disabled Button 3</button>
                        <button class="btn disabled disabled-4" disabled>Disabled Button 4</button>
                        <button class="btn disabled disabled-5" disabled>Disabled Button 5</button>
                    </div>

                    <div>
                        <h2>Icon Buttons with Different Colors</h2>
                        <button class="btn icon-only icon-only-1"><i class="icon">🔍</i></button>
                        <button class="btn icon-only icon-only-2"><i class="icon">✏️</i></button>
                        <button class="btn icon-only icon-only-3"><i class="icon">🗑️</i></button>
                        <button class="btn icon-only icon-only-4"><i class="icon">📥</i></button>
                        <button class="btn icon-only icon-only-5"><i class="icon">📤</i></button>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
export default Page;