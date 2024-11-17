import Layout from '../componen/layout'
// import styles from '../componen/stylemodule/container.module.css';
import './container.css'



const Page = () => {
    return (
        <Layout>
            <div className='box'>
                <h1>Teks Components</h1>
                <h2>Font Size Examples</h2>
                <p class="font-size-small">This is small text.</p>
                <p class="font-size-medium">This is medium text.</p>
                <p class="font-size-large">This is large text.</p>
                <p class="font-size-xlarge">This is extra-large text.</p>
                <p class="font-size-xxlarge">This is extra-extra-large text.</p>

                <h2>Font Weight Examples</h2>
                <p class="font-weight-light">This is light font weight.</p>
                <p class="font-weight-normal">This is normal font weight.</p>
                <p class="font-weight-semibold">This is semi-bold font weight.</p>
                <p class="font-weight-bold">This is bold font weight.</p>
                <p class="font-weight-extrabold">This is extra-bold font weight.</p>

                <h2>Text Color Examples</h2>
                <p class="text-color-primary">This is primary color text.</p>
                <p class="text-color-secondary">This is secondary color text.</p>
                <p class="text-color-success">This is success color text.</p>
                <p class="text-color-warning">This is warning color text.</p>
                <p class="text-color-danger">This is danger color text.</p>

                <h2>Letter Spacing Examples</h2>
                <p class="letter-spacing-tight">This is tight letter spacing.</p>
                <p class="letter-spacing-normal">This is normal letter spacing.</p>
                <p class="letter-spacing-wide">This is wide letter spacing.</p>
                <p class="letter-spacing-wider">This is wider letter spacing.</p>
                <p class="letter-spacing-widest">This is widest letter spacing.</p>

                <h2>Text Decoration Examples</h2>
                <p class="text-underline">This text is underlined.</p>
                <p class="text-line-through">This text is line-through.</p>
                <p class="text-no-decoration">This text has no decoration.</p>
                <p class="text-overline">This text is overlined.</p>
                <p class="text-double-underline">This text has double underline.</p>

                <h2>Uppercase, Italic, Normal Examples</h2>
                <p class="text-uppercase">This text is uppercase.</p>
                <p class="text-lowercase">This text is lowercase.</p>
                <p class="text-capitalize">This text is capitalized.</p>
                <p class="text-italic">This text is italic.</p>
                <p class="text-normal">This text is normal.</p>

                <h2>Line Height Examples</h2>
                <p class="line-height-tight">This text has a tight line height.</p>
                <p class="line-height-normal">This text has a normal line height.</p>
                <p class="line-height-relaxed">This text has a relaxed line height.</p>
                <p class="line-height-loose">This text has a loose line height.</p>
                <p class="line-height-double">This text has a double line height.</p>

                <h2>Text Align Examples</h2>
                <p class="text-align-left">This text is left aligned.</p>
                <p class="text-align-center">This text is center aligned.</p>
                <p class="text-align-right">This text is right aligned.</p>
                <p class="text-align-justify">This text is justified.</p>

                <h2>Whitespace Examples</h2>
                <p class="whitespace-normal">This is normal whitespace.</p>
                <p class="whitespace-nowrap">This text has nowrap whitespace.</p>
                <p class="whitespace-pre">This text has pre whitespace.</p>
                <p class="whitespace-pre-line">This text has pre-line whitespace.</p>
                <p class="whitespace-pre-wrap">This text has pre-wrap whitespace.</p>

                <h2>Text Decoration Style Examples</h2>
                <p class="text-decoration-solid">This text has a solid decoration style.</p>
                <p class="text-decoration-double">This text has a double decoration style.</p>
                <p class="text-decoration-dotted">This text has a dotted decoration style.</p>
                <p class="text-decoration-dashed">This text has a dashed decoration style.</p>
                <p class="text-decoration-wavy">This text has a wavy decoration style.</p>

                <h2>Opacity Examples</h2>
                <p class="opacity-100">This text has 100% opacity.</p>
                <p class="opacity-75">This text has 75% opacity.</p>
                <p class="opacity-50">This text has 50% opacity.</p>
                <p class="opacity-25">This text has 25% opacity.</p>
                <p class="opacity-10">This text has 10% opacity.</p>
            </div>
        </Layout>
    );
}
export default Page;