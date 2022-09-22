import React from "react";
import "../styles/home.css";
const Home = () => {
    return (
        <div className="home-Mian-div">
            <div className="profile-pic-div">
                <img
                    className="profile-img"
                    src="./ProfilePic.jpg"
                    alt=""
                />
            </div>
            <div className="intro-div">
                <h1 className="h1">Hi, I am Uday Kumar</h1>
                <p className="p1">Full Stack Web Developer</p>
                <p className="p2">
                    A passionate aspiring Full Stack Developer skilled in MERN stack, able to apply programming skills to solve complex challenges and work on technologies like HTML, CSS, JavaScript, React, Redux, Material-UI, Tailwind CSS.Eager to gain a dynamic and challenging role in the field of Software Development that will offer the opportunity for further development of my abilities, skills, and knowledge in an organization.
                </p>
                <div className="icon-div">
                    <a href="https://github.com/uudaykuma"  rel="noreferrer" target="_blank" ><img className="git-logo" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAflBMVEX///8AAACPj4/V1dX8/Pzz8/Pn5+fu7u7e3t739/c1NTXr6+v29vbx8fGlpaWwsLCYmJhRUVEfHx+CgoIlJSV6enrNzc07Ozu8vLxERER0dHRJSUlhYWHGxsZYWFgaGhpqamouLi6dnZ0LCwuQkJB/f3+tra0UFBQjIyNlZWWz/V0sAAALM0lEQVR4nO1da3eqOhDVgqhYBcUH9vgA7ev8/z94L6VWwITsCQmTrnX250KzJZn3TAaDf/gHFKNxMJl43tbzJpNgPOJejjkEx2iRHHbn67CO63l3SBbRMeBeoD6egzTehEM1wk2cBs/cyyVi5r0ezgC5O86HV2/GvWwUx2Tf3JIYrvvkyL14JUbRQYvcHYfIYSEUXJYd6ZVYXpwUP9P0ZIReiVM65SbUgLfRO3pyXDceN6k7ptGHYXolPiI3PuQ4pukFCs7xmJveIEis0SuR8EqdWWaZX4GMzxIY2/5+NyQ8e3Ua98SvQMwgc95XPRIcDlfvPfPzEKfBLMI+9eNzXwewjqQ3FytdsxAcDtdpL/zmXb2HLjjM7RNMGfkVsP0Z/Q0zweFw49skOOlfhD4inNgjeOEm942LJX5TThFTx8HKTg123Lwq2FnwOLbcpBrYmia44Gb0gIVZgvxK4hFvJgn+5WYjxF9zBM2EQc1jaYjfaM/NRIq9kfj42CUt0cTOQHxj3q8vT8VnZ2dj5DbB/yl23Kgjl7doiV0nir6rUrSKZRcj9TcQ7KQ03FT0j9BW/TwRNR0kegQj7nUTEOkQ9LhXTYJGuHjMvWYiyMaN764xKsaeqjNeuFdMxguN4G+SMjeQpE2gfN3ZTnGCFNdPtYFMiU6pDmEUzMdBECX9WK1ZvJ2NR/NAlZLd4wSfFK/Kf0717JIboiFDdq8dmqv+9gkleFS9qWZCTBJ71SbhoiYhlXURYOHfs3LFDfX6HNlRLYdmTFSZ9zpjOVRl5DB/fGZrvuzk6VFwjJS//QYhqLbWhK+Zm7XTX4UKXF0ciFhv6gSaJElpsLzmTRJ9eVc+GaoJAhk0afAnMBMaz6QJwon6YWXmTa3rh6uWx8Up1PUpiRfpcetNZqPRaDbxtsd0EScnYcVDa1WJenVKvQ/ELdoNwOoeuOaHS9qesZ2kl0NerU1t/wZAla4ipqFUhUNl0icoYx9hFnloLHPuRVn58Q+KL4BUmrUrRSRPr1Sr6W4TBVRnxg+izU5ZaIFUgrQKG8il4CxqBURNq5MxhYqdrFZ7KPCMLHAtXyGW6OVk6EMrlEoK6Adq+4Xsw4fc0qvMPFU5TSV2vVJqIofW+Cp+GNsBiF1kDz5YFil+Giy3EHgW/cEHk33ik/iJPcx7DkFvey16GA6vuS9Lh2L/B/bTObvnRugi/zw+i1ikJTg7rvBkymNVGJ4r1MrzGAIeqc6ajyojdXdoJuuMgBBGaB4mQmWeUE71BEKXQFNhUBoM+LoCp4RVNvQ2KR3aT9eDCKRGgbpEJIWQTkz8oCDGHbXqTHWYuwauhsAZaZWrqoeBK8NfxLCmEmlxTj6VT6ueqMTm/ZzyIJ+gIeam70lALL5zg8S77AmYl/6Ne6iW0u8qMGl7BSWRF/88Relm4h5ZAaQdfvATjqCIqL7bcR9B6fy4CX2CpcAapPlGji/3JhQJusKFaRyE/qSbvsCt7oyR2B14Rv3bDSIcQ4u9jQQQlFt5EHGTjc/krgM3wMs8Ga5EjXfEaQI/iWUNEVyu7oIgLQEr8K+E8AgWNIY7/joA1onrIlqDGwn8835uwAuYCxMM3tTcFmkVf9BFF6ID/uK2esR1APfNFyfrDf1jN5RhCVglFsEaVLmcXZr2p67h+8YJz1c5o+5LwN/Fx4OscAFuL4DNlClulXKGZx4Be3wzXFm44DjdAUfdtviP4ZIoJQjTFChKLbFyY0rjDXCU/h3Wne6Y3SVycN0XWOG7xhB1L95gxcJbCvUItF3nBNuwLtndBfB1ozFkU1M2TAH12/fwfv6t3zAc5PBv4RbQvZcP0LkXv1XSrAZop+Rv1RYfA3QON2vRpQA5uO4r0oXyBc46IRHgCCG8Sz/cibQVGMPrhiXNb/UtVoMc/dNf6h/msNR1JmlRAnbcd3jmnz+/XQXq1v5vi8F5Gc6y0kfAkajTAB5KanCGnwHAJc1/8ZRx6FIYw4fFxwuhrtglhYgnnxLCbGCX1AVewrcg1MK5kyCllA1FhDqFjJtWBXjByZFSJ8ZNqwJ80QGl/N2dg0iopJ0OpvhFTe4kgfFjePXxcIBLgQy8yLRYM2E4Indt6Q2EOrXCEoPz+O5sU0KJaZHHJxSHu7JNCZXQRaMdpYzdDWlKWXERmYAjHkPDY9C1QajXL6NLcH3RkLdD9gZsMEKJMhdBGZEYK/57H6DcI1LO0iH1oTCzK0C5S7Ls6CXdXMHvYMARmgJl+AzuAP8C90kkWJn31ZLmO3IHpEiNTzcFTrsCiDf2TWpC+zHCaF19vKlSimqrWCikp1j3KWmPViQ/cWgwX3yfeGHRfbIccWrwlesoTojXKt/nW1Bnd695VMaYetdGJcJLO79M8W+8MeQb1QIZ8rWwYf8B8IB8c2bViKZpmQJ53xENjz5euyYuqNt0CE8lNgSNqzPrdWo6M9h7bFvXujqzPimIMhblB8u+dqqnNWu6IQ31Zjn34xATooEVZI23EGd/3PBp/zTqXl77YHnpDlZf2rXhjrqj+x+nHb9qvkkwOt0cUg0Z/41HOSiOlO/eJ2N/dly0V2yEdvppOl3fLpihIzrPn/cfYJG3vvDJtDXu6cmXG0QunsiuOVckrq8w7ZYXYyR977XrXQRCRSZKQtV+ipkqTRW+RN3j/t57lnekJyv+ERqn9ROGSO4/cTrWG4/pz9InQ7eeSLaTUJzUbR/UwM+zZHGETR5/crwkB7LvIIesdUIcI6jbLfMc/z94utH0DW9S/SXWPmHNbsH9UErEihhhUkDeGyILK9aSamiKmXbDlNFbzVvEnSzoVrvLHAt4rWmBDnKIogVtv630+9QauSFnjWrm6BrYArSOBJRap1UFgwzVpjeCGbsRVOGZS6MhVZEKuFp0+8bUfYsfiv8jD2dUj6/SX9bpsKFMjWuBcsyx1CAMK9JGOXVYJ5FKSn1KoU4cyTfLG/RXJXTukiYMa24BYBjLXYiqpdBelqRX9W5C1kCRI+l5qJVEtVohejM0DBg2WA+hPABe03Ft69GLT2lGw6oARbg0613/hVo2ql4glTLWUgzY1pfGf+qGipdL/uxTzz98lr0PBd6NLd2nDUvFF3/tV91Jyl1DFwQzQ7oBm7J4FDeMoFXSIUZMGtf9CJISlhkt2eOfbuPTnzDc/1meNu+4Wy9Et0uIBWtrgbSvSJzf9s3cW9LpcsEdcQ0yuWa1ELpTMIO8fWTKyWaRQheVr3H8JdYbdJepJjow1MrzSUInFnNN+gwPWv9vmovfZi/zq80w16x+kVTofOq4RhB0Ga60a18kAnVtq+pLl2GHXSVzdC3N39Nk2CkbJNMZmZWyLz2GHUsJpGHMC3bJNwlaDDvvJ6kR/mk87avF0EDzQIujG74J7zOe6FLXYGikO0JVEbZMLoso3XrbY3EXdZbrjzqlMzR0Bxw5paBb8UZmaEymU0NEfX1DgwYkMafQE0Oj3ZATUlFYLwxXhu3jOSVKpNuRQWG4N++oEkIMPTC00s2K54bsM7R0UyhcTG6b4Ye1jusxmB3S3UIgw6XNVghsDXYZWh4O7yG5aN1oFcIwtD4TwAeWYZHhUx93ZnvKK8qtMVz3NdRBVb5LK/i6Q8Wwx95Or12o2mG47HcqR5r3zDDv/fYJv8X3zzTf2cJw0YeEaWIqPY6Z5hulDN+4JhpOJCnNTPN9EoYvnCMAAuGidMdkCisjn7inUz0LsnC6VpvAe4mdmLj53rTkdMVeM1gSujP3dls7kGdtuVerHnhxa3LxKLobAfqa+V7Is4wsZA26Ioi/wlX7LpIv+CrHOsdct7crEXhe17XNPI9beP6Da/gPfNWsZr34KLUAAAAASUVORK5CYII=" alt="" /></a>
                    <a href="https://www.linkedin.com/in/uday-kumar-97069a121/"  rel="noreferrer"  target="_blank" ><img className="linkedin-logo" src="data:image/png;base64,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" alt="" /></a>
                    
                    
                </div>
            </div>
        </div>
    );
};

export default Home;
