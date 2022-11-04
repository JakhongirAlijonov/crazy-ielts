import './Style.css'
import Heading from '../../components/Headings/headings'
import WritingIdea from '../../assets/frog.jpg'
import { Link } from 'react-router-dom'


function Blog() {
  return (
    <section className='blog_section'>
    <Heading subChildren={'Blog'} titleChildren={'Useful contents'} />
<div className="contents_wrapper">
  <div className="content_card">
    <img src={WritingIdea} alt="" />
    <div className="content_texts">
      <h1 className="content_title">
      Writing part 1 sample
      </h1>
        <p className="content_desc">
        The diagram illustrates the Life Cycle process of frogs in a pond.
        </p>
        <Link to='/article/1' className='btn article_btn' >Read article</Link>
    </div>
  </div>
</div>
    </section>
  )
}

export default Blog