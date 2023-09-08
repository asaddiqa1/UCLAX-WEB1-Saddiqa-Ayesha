import styled from "styled-components";

/* Component ---------------------------*/
import Essay from "./Essay.jsx";

const Essays = () => {
    return (
        <EssaysStyled className="Essays">
            <h2>FAQs</h2>
            <Essay question="1. What is The Purr Palace?">
                The Purr Palace is a unique cat cafe that offers a cozy and
                welcoming environment for cat lovers to enjoy delicious
                beverages while spending quality time with our resident cats.
            </Essay>

            <Essay question="2. How does The Purr Palace work?">
                When you visit The Purr Palace, you can enjoy your favorite
                drinks and treats while interacting with our adorable cats. We
                have a designated area where you can sit, relax, and make new
                feline friends.
            </Essay>

            <Essay question="3. Can I bring my own cat?">
                Unfortunately, we don't allow outside cats into the cafe to
                ensure the well-being and comfort of our resident cats.
            </Essay>

            <Essay question="4. Do I need to make a reservation?">
                While reservations aren't required, they're recommended,
                especially during peak hours, to ensure you get a spot and have
                ample time to enjoy the company of our cats.
            </Essay>

            <Essay question="5. Are the cats adoptable?">
                Yes, our resident cats are available for adoption. We partner
                with local shelters to provide loving homes for these adorable
                felines.
            </Essay>

            <Essay question="6. How do you ensure the cats' well-being?">
                We prioritize the health and happiness of our resident cats. Our
                staff is trained to monitor their interactions, and we have
                comfortable spaces where they can retreat if they need a break
                from socializing.
            </Essay>

            <Essay question="7. Can I bring my own food and drinks?">
                We kindly ask that you enjoy the food and drinks available at
                our cafe to ensure the safety and comfort of our cats.
            </Essay>

            <Essay question="8. Is there an age limit to visit?">
                All ages are welcome at The Purr Palace, but children under the
                age of 12 must be accompanied by an adult.
            </Essay>

            <Essay question="9. Are you wheelchair accessible?">
                Yes, we are committed to making The Purr Palace accessible to
                all visitors, including those with mobility challenges.
            </Essay>

            <Essay question="10. Do you host events or parties?">
                Yes, we offer event packages for birthdays, celebrations, and
                private gatherings. Please contact us for more details and
                availability.
            </Essay>

            <Essay question="11. Do you offer Wi-Fi?">
                Yes, we provide complimentary Wi-Fi for our visitors to enjoy
                while spending time in our cafe.
            </Essay>

            <Essay question="12. How can I support The Purr Palace's mission?">
                You can support us by visiting our cafe, adopting a cat,
                participating in our events, and spreading the word about our
                mission to create a haven of joy for both humans and cats.
            </Essay>
        </EssaysStyled>
    );
};

export default Essays;

const EssaysStyled = styled.div``;
