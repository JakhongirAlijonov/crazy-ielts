import WritingIdea from "../../assets/frog.jpg";
import Footer from "../../components/Footer";

function OneArticle() {
  return (
    <>
        <section className="onearticle_wrpper">
      <h1 className="article_title">
        The diagram illustrates the Life Cycle process of frogs in a pond.
      </h1>
      <img src={WritingIdea} alt="" />
      <p className="article_text">
        The diagram shows the natural process life cycle of a frog from the
        embryo stage, through seven  developmental phases from tadpole to fully
        grown amphibian. Initially, the fertilised eggs grow into embryos from
        which very small tadpoles emerge and shelter under plants in the water
        or pond. The tadpole begins life black in colour and it has a long tail
        and shorter body. As it grows, external gills for breathing are
        produced while subsequent stages in its development include a longer
        tail and when this stage is complete back limbs begin to appear which
        allows the tiny creature to swim faster. The baby frog is nourished from
        food and nutrients stored in its tail, and the next stage in the cycle
        is for front limbs to begin growing while the tail shrinks and
        eventually disappears. At each stage the creature continues to enlarge
        significantly and changes in colour from black, to dark green and
        ultimately to bright green. Once the tail has disappeared the frog is
        supported on four limbs and continues, in the final phrase, to develop
        into a full sized amphibian.
      </p>
      <p className="article_words" >183 words</p>
      <span className="instructor">Instructor : Mr.Hugo</span>
    </section>
    <Footer/>
    </>
  );
}

export default OneArticle;
