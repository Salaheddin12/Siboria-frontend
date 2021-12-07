import { Global } from "@emotion/react";

const Fonts = () => (
  <Global
    styles={`
        @font-face {
          font-family: 'Inter';
          src: local('Inter'),
              url(/fonts/Inter/Inter-Bold.woff) format('woff');
          font-weight: bold;
          font-style: normal;
          font-display: swap;
      }
    @font-face {
          font-family: 'Inter';
          src: local('Inter'),
              url(/fonts/Inter/Inter-Regular.woff) format('woff');
          font-weight: regular;
          font-style: normal;
          font-display: swap;
      }
    @font-face {
          font-family: 'Poppins';
          src: local('Poppins'),
              url(/fonts/Poppins/Poppins-Bold.woff) format('woff');
          font-weight: bold;
          font-style: normal;
          font-display: swap;
    }
    @font-face {
          font-family: 'Poppins';
          src: local('Poppins'),
              url(/fonts/Poppins/Poppins-Regular.woff) format('woff');
          font-weight: regular;
          font-style: normal;
          font-display: swap;
      }
      `}
  />
);

export default Fonts;
