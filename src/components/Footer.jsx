import React from 'react';
import '../Styles/Footer.css';
import { Button } from '@mui/material';
const Footer = () => {
  return (
    <>
      <div className="foot-container">
        <div className="foot-image">
          <ul>
            <li>
              <a
                href="https://www.facebook.com/scketchdigital/"
                rel="noreferrer"
              >
                <img
                  className="foot-image1"
                  src="https://img.freepik.com/premium-vector/button-3d-icon-facebook-meta-logo_612544-78.jpg?w=2000"
                  alt="facebook1"
                />
              </a>
            </li>

            <li>
              <a
                href="https://twitter.com/ScketchDigital?lang=en"
                rel="noreferrer"
              >
                <img
                  className="foot-image2"
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQoAAAC+CAMAAAD6ObEsAAAAb1BMVEX///8dofIAnPEAnfIAmvETn/L6/v/z+v74/P/s9v7C4vu43fodovKUzfhvvfZ4wfZKr/Ti8f01qPOg0vjV6/ys1/lhuPWDxfey2vri8v1UsvQqpvOc0PhPsfTP6Pw9q/OEw/ZouvXZ7fxxwfbH5Pu641/lAAAF3klEQVR4nO3d2ZqiOhAAYKlYLAIuKKCg0jK+/zMecG2bLQlb8NR/0d9c6GiKkFQqgLMZIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGE/KUbhqmP/SVGZyzCyzpG1GIvCm1r7K8zGtOPGGRhQE3L/yJAsq2Oxhf3GyvUIAvCJwbBrvTVergY+PsNx2WsEIgcQnAovFjfOtoI35FH6856jqEsDveewY6fL7ZcB8Bt+5E9Cf1273fnlYHIQWS8X5uukCGiUf2/jcliUH5Gcwqqu8SjY8SPkyQ9JsDy4CjbKbLDtJF/e8QaIpGNGM5hZi1+PHi8NFZ0/tCdbMBzpJMAjkhknIS9JxhQdfpY5P0bY8lYLJvOjke/+PVvCLttQHeWt8MqGQu/fsQsjcqp6xZ0Jr4fMalYHMQjwTyz+zZ0Y/Ps4eiIj51JaV5VH4nnPGq1nMK7Z79PdjzLv5cTJPdI6IvLvNUM3ofjewZAsMXe6wh2CpzfRkzLXjkw3/bRmlZWvydDsdxnL9gp0LvODnaYzasM2aWvBskLPo4sBALZTyIWCU0Lomz5cfs8TBTMsqLPTo5xyvvOjfj08cov5FO6HgV/z3fGexK7XHlmaUCQO95DuhSGPoj4DpknHQkQnaqGsSoeW0SeKd+UOD/umJqR+D2ZvsG6uQefhZOKZ6CVSygeytMkhFXTWeLLDRUYFyt8ithUHFxEt36x4Aon3Tm2VrSAlYurmsS0Y10wSgaZZqBgZvW2rGwSMs2tPoYyoeAaj8ezqBn+kOGqagD9ET9B0FEwx/xFr19UIaz3pV0jlBkrFB4ock1ZIwIGdrENUsmm4qGwOErWgJH/p7IjNZkqHgq+44sMnOX2/G6LVIqleihMzhIMZuHAOHDt3SGbZXWJCq+jeihmtkCr8njkWzvxSTgSWSiULfG+VOcW1RERj0SWdI/d0Ga6J5VFC0vGbigHa5BIKLwblNEfU+RGG6BfsOW4ja2na5d7+cCqXJZ1GApVLya48xC87a2EwLcn3ioUaq/G8gr+LXuy03999wu4jt3aWveKN7IsW+g5EFkoVCz5v8mX8IWpnmHVlSu6DsV67MbW41iXdhYKZS+3eVgPFgrRjfrBbQfrFtDiOsBBHIYaLCawGCvumvZD7bT7Zie9+SkG9mO3tNllmNEClN0hfBtotJhCsWJ2HCIWii9Ln04DnCKg5JU2BYbTfyi8sRvJaVO88atjEzk/Mmnfp8gU5o+Hnoubald4/zDWfc4jyi/FPrnz3joGampfWVGQrvsKxnQGzZdrFow+osHUrmqWS8vuqG4LV2M3S1L6r+tQKF+0+XRchu7WP4bLk9Z1joHqVyo+7ObIMlh+n30riu9/FPVW72WqV7oLetsRUfVm/BrSN3jUg2PzR6vm2k+3mMrq/IP4JVkcFL0lqIEedx+JqU2kT2nnpwgqf9VqFZErOLko+6yKZhJPYajDprr4yPmdLsZUfZQLn2uHq/R2zxManxV11TFA7SvyePjYSYIBUx4onoywg2BgNHYzumFsE2CtRg0ln8sgaeMHDgPZcQPjqeZWFaz0vJSMxdTKNc1CyVvPp1XN5LBJpFYlqH1dJFy5kSJ/fOB3uXpyC1XpB/KpKo0kV2YQqX1Vu6hdIDuLfkWO+WLuT9LpBKj3FDR555X8rilqk6xkljGvYQzy+2Nw+YoU09zYYaRBi3UHYxO4dLmcvTr6ezvju8so0eZtwpB3iZKnl0/G2ZtDros9Y4inW9C98Z1uKlaI07vC6C/9qLXvEaz5gWKTYLhau40ghOXXLL5M35M/TQDDr+gRL4uASXQNxLm3/YpM4oO1TUCsSoPz+Gfi+xyVDscE+MKR/zyOF35rHO6s/dKD2lI3ZmGYxxd/wukUP2vhRvEt8br9PNLtZ5Juf/KnGYBzCvfp95T1m+nWzt6GlyiJnXy5Gcdesg5W7v5s/Z+i8Ek3TcMw6TfVCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghBf8BvF5IPNH63zIAAAAASUVORK5CYII="
                  alt="twitter"
                />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/scketch_digital/"
                rel="noreferrer"
              >
                <img
                  className="foot-image3"
                  src="https://pbs.twimg.com/profile_images/1526231349354303489/3Bg-2ZsT_400x400.jpg"
                  alt="instagram"
                />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/company/scketch/"
                rel="noreferrer"
              >
                <img
                  className="foot-image4"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGhr05RTQd7tRnbRly36-e1VsQCyXkXIg7yw&usqp=CAU"
                  alt="linkedin"
                />
              </a>
            </li>
          </ul>
        </div>
        <div className="foot">
          <a href="/services" rel="noreferrer" variant="outlined">
            Services
          </a>
          <a href="/aboutus" rel="noreferrer" variant="outlined">
            AboutUs
          </a>
          <a href="/blog/insights" rel="noreferrer" variant="outlined">
            Insights
          </a>
          <a href="/portfolio" rel="noreferrer" variant="outlined">
            Portfolio
          </a>
          <a href="/contact" rel="noreferrer" variant="outlined">
            Contact
          </a>
        </div>
        <div className='foot-last'>
          <p>Made by People and Robots Scketch Digital Solution</p>
          <p>@All Rights Reserved</p>
        </div>
      </div>
    </>
  );
}

export default Footer
