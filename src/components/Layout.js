import { Link, Outlet } from 'react-router-dom';
import { useState } from 'react';
import '../styles/navbar.css';
import Footer from '../components/Footer';

function Layout() {
  const [isActive, setActive] = useState(false);

  const toggleCLass = () => {
    setActive(!isActive);
  };

  return (
    <div>
      <nav className="navbar">
        <ul>
          <div>
            <li>
              <Link to="/" onClick={() => setActive(false)}>
                <div className="logo">
                  <svg
                    width="139"
                    height="48"
                    viewBox="0 0 139 48"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18.4415 2.32524C18.7203 2.54828 18.8597 2.83638 18.8597 3.18952C18.8597 3.54267 18.7854 3.95157 18.6367 4.41624C18.4694 4.89949 18.2742 5.41992 18.0512 5.97752C17.8096 6.53511 17.5958 7.13918 17.41 7.78971C17.2799 8.25438 17.1776 8.62611 17.1033 8.90491C17.0289 9.16512 16.9732 9.46251 16.936 9.79707C16.8988 10.113 16.8524 10.5219 16.7966 11.0238C16.7408 11.5256 16.6758 12.2319 16.6014 13.1427C16.6014 13.2914 16.5921 13.5237 16.5736 13.8397C16.5364 14.1556 16.5085 14.4809 16.4899 14.8155C16.4527 15.15 16.4249 15.466 16.4063 15.7634C16.3877 16.0608 16.3784 16.2931 16.3784 16.4604C16.3784 16.8879 16.3598 17.5012 16.3226 18.3004C16.2669 19.0997 16.2204 19.9454 16.1832 20.8375C16.1275 21.7297 16.0531 22.6311 15.9602 23.5419C15.8673 24.4526 15.765 25.2611 15.6535 25.9674C15.5048 26.9525 15.2353 27.8447 14.845 28.6439C14.4547 29.4431 13.9621 30.1959 13.3674 30.9022C12.6611 31.6828 11.7782 32.2869 10.7188 32.7144C10.1983 32.9374 9.57569 33.114 8.85082 33.2441C8.14452 33.3742 7.41035 33.3835 6.6483 33.272C5.92342 33.1604 5.27289 32.956 4.69671 32.6586C4.12052 32.3426 3.60939 31.9709 3.16331 31.5434C2.69864 31.1159 2.28974 30.642 1.93659 30.1215C1.58345 29.6197 1.27677 29.1179 1.01656 28.616C0.979382 28.5231 0.932916 28.4302 0.877156 28.3372C0.821396 28.2443 0.765636 28.1421 0.709876 28.0305C0.505423 27.6031 0.46825 27.2127 0.598356 26.8596C0.728463 26.5064 0.821396 26.2648 0.877156 26.1347C0.970089 25.9303 1.14666 25.7537 1.40687 25.605C1.6485 25.4563 1.89942 25.3634 2.15963 25.3262C2.41985 25.289 2.65218 25.3076 2.85663 25.3819C3.06108 25.4563 3.1819 25.5864 3.21907 25.7723C3.23766 25.9581 3.312 26.3206 3.44211 26.8596C3.57222 27.4172 3.81384 27.9934 4.16699 28.5881C4.52013 29.1829 5.02197 29.7126 5.6725 30.1773C6.32304 30.6605 7.19661 30.9115 8.29322 30.9301C8.94375 30.9486 9.51064 30.8278 9.99389 30.5676C10.4957 30.2888 10.9697 29.9264 11.4158 29.4803C11.676 29.2201 11.899 28.8762 12.0849 28.4487C12.2522 28.0212 12.4009 27.5566 12.531 27.0547C12.6425 26.5343 12.7261 26.0139 12.7819 25.4935C12.8376 24.973 12.8655 24.4991 12.8655 24.0716C12.8841 23.7742 12.9027 23.3839 12.9213 22.9006C12.9213 22.4174 12.9399 21.7668 12.977 20.949C12.977 20.4658 12.977 19.9825 12.977 19.4993C12.9956 18.9974 13.0235 18.5142 13.0607 18.0495C13.0793 17.5849 13.0979 17.1667 13.1164 16.7949C13.1164 16.4418 13.135 16.1537 13.1722 15.9307C13.2651 14.8712 13.3581 13.8304 13.451 12.8081C13.5439 11.7672 13.6555 10.6799 13.7856 9.54615C13.8599 8.95138 13.9343 8.33802 14.0086 7.70607C14.0644 7.07413 14.1387 6.47935 14.2316 5.92176C14.306 5.34557 14.3896 4.80656 14.4826 4.30472C14.5941 3.82147 14.7242 3.42186 14.8729 3.10588C15.3004 2.21373 15.8487 1.73977 16.5178 1.68401C17.1683 1.60966 17.8096 1.82341 18.4415 2.32524ZM30.1511 17.7428C30.2812 17.7614 30.337 17.8265 30.3184 17.938C30.2998 18.0681 30.2905 18.4027 30.2905 18.9417C30.2905 19.4621 30.1883 20.2613 29.9838 21.3394C29.7794 22.3988 29.4169 23.7649 28.8965 25.4377C28.6177 26.3485 28.3017 27.1477 27.9486 27.8354C27.614 28.5417 27.3166 29.1272 27.0564 29.5918C26.852 29.9636 26.601 30.3353 26.3037 30.707C26.0063 31.0602 25.6345 31.2367 25.1885 31.2367C24.3521 31.2367 23.7015 30.9022 23.2369 30.2331C23.1625 30.103 23.0789 29.9636 22.9859 29.8149C22.893 29.6662 22.7908 29.4896 22.6793 29.2851C22.0101 31.1624 21.0622 32.101 19.8355 32.101C19.2407 32.101 18.6924 31.878 18.1906 31.4319C17.2613 30.4654 16.8338 28.4487 16.9081 25.3819C16.9453 24.8987 17.0103 24.3225 17.1033 23.6534C17.2148 22.9843 17.3449 22.278 17.4936 21.5345C17.6051 21.107 17.7352 20.6517 17.8839 20.1684C18.014 19.6666 18.1627 19.1647 18.33 18.6629C18.4973 18.1796 18.6646 17.7243 18.8318 17.2968C18.9805 16.8879 19.1199 16.5533 19.25 16.2931C19.4359 15.9585 19.6682 15.6147 19.947 15.2615C20.2072 14.9084 20.5325 14.7318 20.9228 14.7318C21.2202 14.7318 21.5362 14.8062 21.8707 14.9549C22.2053 15.085 22.5213 15.2801 22.8187 15.5403C23.116 15.782 23.3763 16.0701 23.5993 16.4046C23.8223 16.7392 23.9617 17.0923 24.0175 17.464C24.1476 18.3004 24.1569 18.8859 24.0454 19.2205C23.9524 19.555 23.8502 19.806 23.7387 19.9732C23.6829 20.0104 23.6179 20.0755 23.5435 20.1684C23.4506 20.2427 23.3391 20.2985 23.209 20.3357C23.0975 20.3729 22.9952 20.3729 22.9023 20.3357C22.8094 20.2985 22.7536 20.187 22.735 20.0011C22.6607 19.3692 22.5306 18.8302 22.3447 18.3841C22.1588 17.9194 21.8986 17.6685 21.5641 17.6313C21.4897 17.7614 21.3596 18.0681 21.1737 18.5514C20.9879 19.0532 20.7277 19.8989 20.3931 21.0884C20.0585 22.2966 19.7797 23.4211 19.5567 24.4619C19.408 25.7072 19.3337 26.9897 19.3337 28.3093C19.3337 28.7368 19.4266 29.1272 19.6125 29.4803C19.6682 29.5918 19.7612 29.6755 19.8913 29.7312C20.0214 29.8056 20.105 29.8427 20.1422 29.8427C20.2537 29.8427 20.4303 29.6197 20.6719 29.1736C20.8949 28.7275 21.1552 28.0863 21.4525 27.2499C21.7313 26.5064 21.9079 25.8094 21.9823 25.1589C22.0566 24.5084 22.1588 23.8393 22.2889 23.1516C22.3447 22.9471 22.3912 22.7519 22.4283 22.5661C22.4469 22.3988 22.4655 22.2036 22.4841 21.9806C22.5213 21.7761 22.5213 21.6367 22.4841 21.5624C22.4469 21.4881 22.4655 21.3951 22.5399 21.2836C22.6142 21.1907 22.6978 21.1442 22.7908 21.1442C22.8837 21.1442 22.9581 21.1442 23.0138 21.1442C23.051 21.1442 23.116 21.1442 23.209 21.1442C23.2833 21.1628 23.3484 21.1721 23.4041 21.1721C23.4971 21.1721 23.5807 21.2 23.6551 21.2557C23.748 21.3301 23.8409 21.3765 23.9339 21.3951C24.0454 21.4323 24.129 21.4695 24.1848 21.5066C24.2591 21.5438 24.3335 21.5903 24.4078 21.646C24.5193 21.6646 24.6216 21.7018 24.7145 21.7576C24.7888 21.8133 24.8632 21.8784 24.9375 21.9527C24.9933 22.0271 25.0026 22.12 24.9654 22.2315C24.8725 22.4546 24.7981 22.6962 24.7424 22.9564C24.668 23.2166 24.6123 23.4768 24.5751 23.737C24.5193 24.1088 24.4729 24.4991 24.4357 24.908C24.3985 25.3355 24.3521 25.7444 24.2963 26.1347C24.2405 26.841 24.3149 27.538 24.5193 28.2257C24.6309 28.5231 24.7145 28.7182 24.7703 28.8112C24.8446 28.9041 24.8911 28.9599 24.9097 28.9785C24.9468 28.9785 24.984 28.9413 25.0212 28.8669C25.0769 28.8112 25.1606 28.6997 25.2721 28.5324C25.365 28.3651 25.5044 28.1142 25.6903 27.7796C25.8576 27.4636 26.0713 27.0455 26.3315 26.525C26.852 25.447 27.233 24.4712 27.4746 23.5976C27.7162 22.7426 27.9207 22.0735 28.088 21.5903L29.0638 18.858C29.1009 18.6536 29.1939 18.4027 29.3426 18.1053C29.4913 17.8079 29.7608 17.6871 30.1511 17.7428ZM41.3031 17.7428C41.4146 17.7428 41.461 17.8079 41.4425 17.938C41.4239 18.0681 41.4146 18.4027 41.4146 18.9417C41.4146 19.9082 40.857 22.0828 39.7418 25.4656C39.2957 26.7667 38.9054 27.8075 38.5708 28.5881C38.2363 29.3688 37.9296 29.9636 37.6508 30.3725C37.3906 30.7628 37.1489 31.023 36.9259 31.1531C36.7029 31.2832 36.4984 31.3483 36.3125 31.3483C35.0301 31.3483 34.1751 30.4282 33.7476 28.5881C33.2643 29.6104 32.874 30.3167 32.5766 30.707C32.0562 31.4505 31.4429 31.8222 30.7366 31.8222C30.4206 31.8222 30.0489 31.7293 29.6214 31.5434C29.1939 31.339 28.7943 30.9301 28.4225 30.3167C27.8835 29.4245 27.614 28.2722 27.614 26.8596C27.614 25.7258 27.7069 24.5827 27.8928 23.4304C28.0601 22.2594 28.3668 20.949 28.8128 19.4993C29.8537 16.0793 31.1083 14.3694 32.5766 14.3694C33.0971 14.3694 33.6361 14.6203 34.1937 15.1221C34.2494 15.1407 34.2866 15.1686 34.3052 15.2058C34.3238 15.2244 34.3517 15.2522 34.3888 15.2894C34.5561 13.9512 34.7606 12.2877 35.0022 10.2989C35.2438 8.31014 35.5412 6.10762 35.8944 3.69136C35.8572 3.48691 35.8572 3.17094 35.8944 2.74344C35.9315 2.33454 36.136 2.04645 36.5077 1.87917L36.6192 1.85129H37.5114C37.8645 1.85129 38.1247 1.92563 38.292 2.07433C38.4593 2.20443 38.608 2.3903 38.7381 2.63192C38.924 2.91072 38.989 3.3568 38.9333 3.97016L38.8775 3.99804C38.6545 5.22476 38.4221 6.47006 38.1805 7.73395C37.9203 8.99784 37.6508 10.364 37.372 11.8323C37.3348 12.0553 37.2326 12.8081 37.0653 14.0906C36.898 15.3731 36.6564 17.2224 36.3404 19.6387C35.8758 23.2073 35.6434 25.5121 35.6434 26.5529C35.6806 27.3893 35.7457 27.9841 35.8386 28.3372C35.9129 28.6904 35.978 28.9134 36.0337 29.0063C36.1639 28.8762 36.359 28.551 36.6192 28.0305C36.8609 27.4915 37.2698 26.5715 37.8459 25.2704C38.2734 24.2482 38.7009 23.2073 39.1284 22.1479C39.5373 21.0884 39.8905 20.0848 40.1879 19.1368C40.2064 19.0439 40.2436 18.9138 40.2994 18.7465C40.3551 18.5978 40.4202 18.4398 40.4945 18.2726C40.5689 18.1239 40.6711 17.9938 40.8012 17.8822C40.9313 17.7893 41.0986 17.7428 41.3031 17.7428ZM33.6918 20.3078V20.2799C33.7476 19.8338 33.7848 19.5179 33.8034 19.332C33.8405 19.1461 33.8591 18.951 33.8591 18.7465C33.8591 18.096 33.7755 17.715 33.6082 17.6034C33.4409 17.4919 33.3015 17.4362 33.19 17.4362C33.1714 17.4362 33.1157 17.4362 33.0227 17.4362C32.9298 17.4362 32.7997 17.5105 32.6324 17.6592C32.4651 17.8079 32.27 18.0774 32.0469 18.4677C31.8239 18.8395 31.5823 19.4156 31.322 20.1963C30.5972 22.2966 30.2347 24.2389 30.2347 26.0232C30.2347 26.6737 30.244 27.2127 30.2626 27.6402C30.2812 28.0677 30.3184 28.4116 30.3741 28.6718C30.4113 28.932 30.4485 29.1179 30.4856 29.2294C30.5414 29.3409 30.5972 29.4245 30.6529 29.4803C30.8388 29.5918 31.0339 29.4524 31.2384 29.0621C31.4429 28.6718 31.7588 27.9004 32.1863 26.7481H32.2142C32.7532 25.3541 33.1807 23.9508 33.4967 22.5382C33.5338 22.2966 33.5617 21.9992 33.5803 21.646C33.5989 21.2743 33.6361 20.8282 33.6918 20.3078ZM49.7786 17.7428C50.1131 17.7428 50.2711 17.8358 50.2525 18.0216C50.2153 18.2261 50.1968 18.4863 50.1968 18.8023C50.1968 18.8395 50.1968 18.9231 50.1968 19.0532C50.1782 19.1647 50.141 19.3227 50.0852 19.5272C50.0295 19.7316 49.9644 20.0197 49.8901 20.3914C49.8157 20.7632 49.7042 21.2185 49.5555 21.7576C49.0537 23.7649 48.5147 25.5306 47.9385 27.0547C47.6597 27.8168 47.3809 28.4673 47.1021 29.0063C46.8233 29.5268 46.5538 29.9728 46.2936 30.3446C45.6059 31.3297 44.723 31.8222 43.645 31.8222C42.4554 31.8222 41.4332 31.1996 40.5782 29.9543C39.7975 28.7833 39.4072 27.3614 39.4072 25.6886C39.4072 24.3504 39.5002 22.9843 39.686 21.5903C39.8905 20.2149 40.1414 18.9789 40.4388 17.8822C40.5503 17.4919 40.6804 17.0923 40.8291 16.6834C40.9592 16.2745 41.1358 15.8935 41.3588 15.5403C41.5633 15.1872 41.7956 14.8991 42.0558 14.6761C42.316 14.453 42.6227 14.3415 42.9759 14.3415C43.7193 14.3415 44.3977 14.611 45.0111 15.15C45.3085 15.4474 45.5408 15.8005 45.7081 16.2095C45.894 16.6369 45.9869 16.9994 45.9869 17.2968C45.9869 17.8172 45.9404 18.3934 45.8475 19.0253C45.736 19.6573 45.6059 20.2799 45.4572 20.8933C45.2899 21.4881 45.1133 22.0457 44.9274 22.5661C44.723 23.0679 44.5185 23.4768 44.3141 23.7928C44.184 24.0158 43.9981 24.2482 43.7565 24.4898C43.5335 24.7314 43.3011 24.9173 43.0595 25.0474C42.7993 25.1961 42.5577 25.2797 42.3346 25.2983C42.1116 25.2983 41.9257 25.1961 41.777 24.9916C41.7213 25.1961 41.712 25.4749 41.7491 25.828C41.7677 26.1626 41.8049 26.4879 41.8607 26.8038C41.9164 27.1384 41.9815 27.4451 42.0558 27.7239C42.1302 28.0212 42.1952 28.235 42.251 28.3651C42.4554 28.7926 42.7249 29.1179 43.0595 29.3409C43.3941 29.5639 43.6264 29.6755 43.7565 29.6755C44.0167 29.6755 44.2769 29.4803 44.5371 29.09C44.7788 28.6997 45.0947 28.2071 45.485 27.6123C45.9311 26.9061 46.4237 25.921 46.9627 24.6571C47.5203 23.3746 48.0128 22.0085 48.4403 20.5587C48.5333 20.2613 48.6076 19.9825 48.6634 19.7223C48.7377 19.4435 48.8121 19.1554 48.8864 18.858C49.0165 18.1146 49.3139 17.7428 49.7786 17.7428ZM43.645 16.9065C43.4405 17.4826 43.2547 18.0031 43.0874 18.4677C42.9201 18.9138 42.7528 19.3506 42.5855 19.7781C42.4368 20.2056 42.3067 20.6424 42.1952 21.0884C42.1023 21.5345 42.0372 22.0271 42.0001 22.5661C42.3532 22.5475 42.6506 22.3152 42.8922 21.8691C43.1338 21.423 43.2918 21.0234 43.3662 20.6702C43.4777 20.1498 43.5892 19.6201 43.7007 19.0811C43.8308 18.5421 43.8959 17.9938 43.8959 17.4362C43.8959 17.3061 43.8773 17.1388 43.8401 16.9343C43.7844 16.7485 43.7193 16.7392 43.645 16.9065ZM73.3092 31.1531C73.5137 31.2832 73.6438 31.4598 73.6995 31.6828C73.7367 31.9059 73.6995 32.1103 73.588 32.2962C73.5137 32.4449 73.3371 32.5564 73.0583 32.6307C72.7795 32.6865 72.4728 32.7237 72.1383 32.7422C71.8037 32.7608 71.4877 32.7515 71.1903 32.7144C70.893 32.6772 70.6792 32.6121 70.5491 32.5192C70.0287 32.2404 69.5083 31.8687 68.9878 31.404C68.486 30.9579 68.0027 30.4003 67.5381 29.7312C66.9433 28.8576 66.4693 28.077 66.1162 27.3893C65.7631 26.683 65.4657 25.9581 65.224 25.2147C65.001 24.4712 64.7873 23.672 64.5828 22.817C64.3969 21.9806 64.146 21.0141 63.83 19.9175C63.4583 19.7688 63.1238 19.5457 62.8264 19.2484C62.529 18.951 62.4082 18.5421 62.4639 18.0216C62.4825 17.6499 62.6219 17.2875 62.8821 16.9343C63.1238 16.5812 63.4769 16.3303 63.9416 16.1816C64.0531 16.1258 64.2018 16.0886 64.3876 16.0701C64.5549 16.0701 64.7408 16.0701 64.9452 16.0701C65.1311 16.0701 65.317 16.0793 65.5028 16.0979C65.6887 16.1165 65.8374 16.1537 65.9489 16.2095C66.3392 16.3953 66.6087 16.6184 66.7574 16.8786C66.8318 17.0644 66.9712 17.1574 67.1756 17.1574C67.3615 17.2131 67.6124 17.1388 67.9284 16.9343C68.2444 16.7485 68.4953 16.5719 68.6812 16.4046C69.2945 15.8284 69.8521 15.0478 70.354 14.0627C70.8372 13.059 71.274 11.8509 71.6643 10.4383C71.7572 10.1595 71.8502 9.80636 71.9431 9.37887C72.0175 8.96996 72.0825 8.55176 72.1383 8.12427C72.194 7.73395 72.2126 7.3901 72.194 7.09271C72.1569 6.79533 72.1104 6.50723 72.0546 6.22844C71.8316 4.79727 71.2926 3.84935 70.4376 3.38468C68.8391 2.51111 67.1849 2.59475 65.475 3.6356C64.7873 4.06309 64.081 4.63928 63.3561 5.36416C63.3375 5.38274 63.3282 5.41062 63.3282 5.4478C63.0122 6.67451 62.7148 9.193 62.4361 13.0033C62.3059 14.4716 62.213 15.7169 62.1572 16.7392C62.1015 17.7614 62.0643 18.5978 62.0457 19.2484C62.0457 19.5457 62.0271 20.1126 61.99 20.949C61.9714 21.804 61.9435 22.6962 61.9063 23.6255C61.8877 24.5734 61.8599 25.447 61.8227 26.2462C61.7855 27.0455 61.7669 27.5752 61.7669 27.8354C61.7669 28.0956 61.7669 28.4023 61.7669 28.7554C61.7855 29.1086 61.8134 29.4524 61.8506 29.787C61.8877 30.1401 61.9342 30.4561 61.99 30.7349C62.0457 31.0137 62.1015 31.2181 62.1572 31.3483C62.2502 31.6456 62.3524 31.8873 62.4639 32.0731C62.5754 32.2776 62.6498 32.5099 62.687 32.7701C62.7427 32.8631 62.7148 32.9932 62.6033 33.1604C62.4918 33.3091 62.371 33.4021 62.2409 33.4392C62.1108 33.4578 61.9993 33.4764 61.9063 33.495C61.8134 33.495 61.7298 33.495 61.6554 33.495C61.0421 33.495 60.5774 33.3928 60.2614 33.1883C59.9269 32.9653 59.6945 32.7237 59.5644 32.4635C59.3414 32.0917 59.1741 31.3575 59.0626 30.2609C58.9139 29.1457 58.8395 26.6923 58.8395 22.9006C58.8395 22.7148 58.8395 22.3337 58.8395 21.7576C58.8581 21.1814 58.8767 20.5123 58.8953 19.7502C58.9139 18.9882 58.9325 18.161 58.9511 17.2689C58.9696 16.3767 58.9975 15.5403 59.0347 14.7597C59.0533 13.9605 59.0812 13.2542 59.1183 12.6408C59.1369 12.0275 59.1741 11.5907 59.2299 11.3305L59.5087 6.56299C59.5087 6.07974 59.5272 5.55932 59.5644 5.00172C59.6202 4.46271 59.6202 3.93299 59.5644 3.41256L59.7317 1.62825C59.7317 1.49814 59.7875 1.37733 59.899 1.26581C60.3636 0.856902 60.9305 0.652449 61.5996 0.652449H61.7948C62.7056 0.689622 63.3096 1.07994 63.607 1.82341C63.7371 1.73047 63.8672 1.64683 63.9973 1.57249C64.1274 1.49814 64.2575 1.43309 64.3876 1.37733C65.6329 0.801142 66.934 0.531636 68.2908 0.568809C69.5919 0.587396 70.9673 0.940542 72.4171 1.62825H72.4449C73.4672 2.18585 74.2107 2.96648 74.6753 3.97016C75.14 4.95525 75.4002 6.03328 75.456 7.20423C75.5117 8.04063 75.456 9.03502 75.2887 10.1874C75.1214 11.3398 74.6846 12.6315 73.9783 14.0627C73.904 14.2486 73.8204 14.4158 73.7274 14.5645C73.6345 14.7318 73.5323 14.9084 73.4207 15.0943C73.1234 15.6519 72.7423 16.1909 72.2777 16.7113C71.8316 17.2317 71.3205 17.7057 70.7443 18.1332C70.1867 18.5792 69.6105 18.9603 69.0157 19.2762C68.4209 19.6108 67.8355 19.8524 67.2593 20.0011C67.2593 20.2056 67.2686 20.4007 67.2872 20.5866C67.3057 20.7725 67.3243 20.9676 67.3429 21.1721C67.4544 22.5475 67.631 23.7649 67.8726 24.8243C68.1143 25.8838 68.5789 26.9432 69.2666 28.0027C70.0844 29.4152 70.9023 30.326 71.7201 30.7349C71.7387 30.7535 71.7944 30.7814 71.8873 30.8185C71.9803 30.8371 72.1476 30.865 72.3892 30.9022C72.668 30.9393 72.8817 30.9858 73.0304 31.0416C73.1605 31.0787 73.2535 31.1159 73.3092 31.1531ZM85.0746 17.8544C85.6879 17.8544 85.9946 18.1703 85.9946 18.8023C85.9946 19.4714 85.9017 20.187 85.7158 20.949C85.5485 21.7297 85.2697 22.5475 84.8794 23.4025C84.1173 25.0939 83.0951 25.9395 81.8126 25.9395C81.7383 25.9395 81.636 25.921 81.5059 25.8838C81.3758 25.8466 81.1342 25.763 80.781 25.6329C80.7253 25.8931 80.6602 26.1533 80.5859 26.4135C80.5301 26.6923 80.4651 26.9897 80.3907 27.3057V27.3893C80.1491 28.0584 79.9353 28.616 79.7495 29.0621C79.5636 29.5082 79.3963 29.8613 79.2476 30.1215C78.5785 31.1996 77.7328 31.7386 76.7106 31.7386C75.4653 31.7386 74.5452 31.1159 73.9505 29.8706C73.3929 28.7554 73.1141 27.1012 73.1141 24.908C73.1141 22.3059 73.3278 20.503 73.7553 19.4993V19.2484C73.7181 19.0997 73.6995 18.9696 73.6995 18.858C73.6995 18.7279 73.6995 18.6164 73.6995 18.5235V18.4677C73.7553 18.0774 73.8575 17.8079 74.0062 17.6592C74.0434 17.5477 74.0899 17.3804 74.1456 17.1574C74.1828 16.9157 74.2664 16.5347 74.3965 16.0143C74.4895 15.624 74.6196 15.3173 74.7869 15.0943C74.9541 14.8526 75.1307 14.6668 75.3166 14.5367C75.4839 14.4065 75.6604 14.3229 75.8463 14.2857C76.0322 14.2486 76.1994 14.23 76.3481 14.23C77.1659 14.23 78.0302 14.5645 78.941 15.2337C79.8517 15.8842 80.4465 16.6184 80.7253 17.4362C80.7625 17.5291 80.7996 17.6778 80.8368 17.8822C80.874 18.1053 80.9019 18.4306 80.9204 18.858C80.9576 19.2855 80.9855 19.8617 81.0041 20.5866C81.0227 21.3115 81.032 22.2315 81.032 23.3467C81.1621 23.4582 81.3201 23.514 81.5059 23.514C81.7476 23.514 82.0171 23.4489 82.3144 23.3188C82.6118 23.1887 82.8999 22.8263 83.1787 22.2315C83.2345 22.0642 83.3367 21.7576 83.4854 21.3115C83.6341 20.8468 83.82 20.0848 84.043 19.0253C84.2103 18.2447 84.5541 17.8544 85.0746 17.8544ZM77.6585 28.0027C78.0488 27.1477 78.2997 26.4786 78.4112 25.9953C78.5228 25.5121 78.5785 25.1682 78.5785 24.9637C78.5785 24.592 78.5506 24.1645 78.4949 23.6813C78.4577 23.1794 78.3834 22.6311 78.2719 22.0364C78.1232 21.2 78.0209 20.6238 77.9652 20.3078C77.928 19.9918 77.9094 19.7688 77.9094 19.6387C77.9094 19.5086 77.9094 19.3692 77.9094 19.2205C77.9094 19.0718 77.9373 18.8859 77.993 18.6629C78.0302 18.4584 78.0488 18.2819 78.0488 18.1332C78.0488 18.0031 78.0488 17.9008 78.0488 17.8265C78.0488 17.4548 77.9838 17.2131 77.8536 17.1016C77.7235 16.9715 77.547 16.9065 77.3239 16.9065C77.3053 16.9436 77.2682 17.0087 77.2124 17.1016C77.1381 17.2131 77.0544 17.3897 76.9615 17.6313C76.8686 17.8915 76.7663 18.2354 76.6548 18.6629C76.5433 19.109 76.4225 19.6852 76.2924 20.3914C76.0693 21.4881 75.9113 22.4453 75.8184 23.2631C75.7069 24.0809 75.6511 24.7872 75.6511 25.3819C75.6511 25.7537 75.6697 26.1626 75.7069 26.6087C75.7255 27.0362 75.7812 27.4544 75.8742 27.8633C75.9671 28.2722 76.0879 28.6067 76.2366 28.8669C76.4039 29.1457 76.6176 29.3037 76.8779 29.3409C76.915 29.2851 76.9987 29.1736 77.1288 29.0063C77.2403 28.8391 77.4169 28.5045 77.6585 28.0027ZM96.4217 17.8544C96.6261 17.8544 96.8306 17.9287 97.035 18.0774C97.2209 18.2447 97.3138 18.5235 97.3138 18.9138C97.3138 19.8431 96.8306 21.8412 95.8641 24.908C95.195 26.9525 94.5444 28.458 93.9125 29.4245C93.262 30.4096 92.5742 30.9022 91.8494 30.9022C91.1803 30.9022 90.632 30.5862 90.2045 29.9543C90.1115 29.8056 90 29.5918 89.8699 29.313C89.7398 29.0342 89.6097 28.7182 89.4796 28.3651C89.2194 28.9785 89.0428 29.406 88.9499 29.6476C88.8569 29.8706 88.7826 30.0286 88.7268 30.1215V30.1494C88.0577 31.2089 87.2399 31.7386 86.2734 31.7386C85.9946 31.7386 85.66 31.6549 85.2697 31.4877C84.898 31.3204 84.5448 30.9672 84.2103 30.4282C83.7456 29.6104 83.5133 28.6811 83.5133 27.6402C83.5133 26.7667 83.5319 25.828 83.569 24.8243C83.6062 23.8207 83.6527 22.7334 83.7084 21.5624C83.7456 20.6517 83.7921 19.9361 83.8478 19.4156C83.9036 18.8952 83.9501 18.5049 83.9872 18.2447C84.0244 17.9845 84.0616 17.8079 84.0988 17.715C84.1173 17.622 84.1359 17.5477 84.1545 17.4919C84.2474 17.3618 84.3775 17.2317 84.5448 17.1016C84.7307 16.9529 85.0095 16.8786 85.3812 16.8786C85.5299 16.8786 85.7065 16.9157 85.9109 16.9901C86.134 17.0644 86.3477 17.2224 86.5522 17.464C86.8867 17.7986 87.054 18.161 87.054 18.5514C87.054 18.8116 86.989 19.174 86.8589 19.6387C86.7845 19.9361 86.7288 20.1591 86.6916 20.3078C86.6544 20.4379 86.6358 20.5308 86.6358 20.5866C86.2455 22.7426 86.0504 25.3076 86.0504 28.2815C86.0504 28.8019 86.0782 29.1364 86.134 29.2851C86.2083 29.4524 86.2548 29.5454 86.2734 29.5639C86.4035 29.5639 86.515 29.4989 86.6079 29.3688C86.7009 29.2387 86.7845 29.1086 86.8589 28.9785C86.989 28.6997 87.1191 28.4116 87.2492 28.1142C87.3793 27.7982 87.5094 27.5008 87.6395 27.222V27.1941C88.2343 25.9117 88.6804 24.1645 88.9777 21.9527C88.9963 21.8226 89.0242 21.5903 89.0614 21.2557C89.0986 20.9397 89.1729 20.5215 89.2844 20.0011V19.9732C89.4145 19.2298 89.4796 18.7094 89.4796 18.412V17.2968C89.4052 16.7578 89.4517 16.2931 89.619 15.9028C89.842 15.4567 90.1952 15.2337 90.6784 15.2337H90.9293C91.6728 15.2708 92.1375 15.4381 92.3233 15.7355C92.5092 16.0329 92.6021 16.2838 92.6021 16.4883C92.6021 16.7485 92.4999 17.0458 92.2954 17.3804C92.2025 17.5477 92.1375 17.7707 92.1003 18.0495C92.1003 18.0681 92.091 18.1239 92.0724 18.2168C92.0538 18.2912 92.0352 18.4398 92.0167 18.6629C91.9795 18.8859 91.9423 19.2019 91.9051 19.6108C91.8494 20.0197 91.7657 20.568 91.6542 21.2557C91.5613 21.9992 91.4869 22.6962 91.4312 23.3467C91.3754 23.9787 91.3475 24.5455 91.3475 25.0474C91.3475 25.6607 91.3661 26.2091 91.4033 26.6923C91.4405 27.1756 91.5148 27.5566 91.6263 27.8354C91.7564 28.2257 91.868 28.4394 91.9609 28.4766C91.9981 28.4766 92.0538 28.4394 92.1282 28.3651C92.2025 28.2722 92.3233 28.0956 92.4906 27.8354C92.6393 27.5752 92.8159 27.2127 93.0203 26.7481C93.2248 26.2834 93.4571 25.6329 93.7173 24.7965C94.0147 23.7556 94.3028 22.7519 94.5816 21.7854C94.8418 20.8003 95.1206 19.8245 95.418 18.858C95.641 18.1889 95.9756 17.8544 96.4217 17.8544ZM105.511 32.2683C106.031 32.2683 106.449 32.3241 106.765 32.4356C107.081 32.5471 107.323 32.6865 107.49 32.8538C107.657 33.021 107.769 33.1976 107.825 33.3835C107.88 33.5694 107.908 33.7366 107.908 33.8853C107.908 33.9783 107.89 34.0898 107.852 34.2199C107.834 34.3686 107.778 34.5173 107.685 34.666C107.592 34.7961 107.453 34.9169 107.267 35.0284C107.063 35.1399 106.793 35.1957 106.458 35.1957C105.994 35.1957 105.445 35.0377 104.814 34.7217C103.921 34.7217 103.262 34.731 102.834 34.7496C102.407 34.7868 102.1 34.8147 101.914 34.8332V37.7885C101.914 40.8739 101.552 43.1415 100.827 44.5912C99.8602 46.4871 98.1595 47.435 95.7247 47.435C93.7359 47.435 92.0167 46.7473 90.5669 45.3719C89.08 43.9593 88.3365 42.3422 88.3365 40.5208C88.3365 39.1268 89.0149 37.8722 90.3717 36.757C91.6728 35.6789 93.5965 34.7124 96.1429 33.8574L96.1986 33.8296C96.6261 33.718 97.1094 33.5972 97.6484 33.4671C98.1874 33.337 98.7636 33.1697 99.377 32.9653C99.3398 32.5936 99.3026 32.0731 99.2654 31.404C99.2468 31.2367 99.2283 31.0787 99.2097 30.9301C99.1911 30.7814 99.1818 30.642 99.1818 30.5119C98.587 31.5899 97.9179 32.1289 97.1744 32.1289C96.1522 32.1289 95.3158 31.6271 94.6652 30.6234C94.0891 29.7126 93.801 28.5231 93.801 27.0547C93.801 26.0697 93.9125 24.9916 94.1355 23.8207C94.3586 22.6311 94.6931 21.2557 95.1392 19.6944C95.3437 18.858 95.5574 18.1518 95.7804 17.5756C96.0035 16.9994 96.2172 16.4975 96.4217 16.0701C96.6075 15.7169 96.8399 15.3638 97.1187 15.0106C97.3789 14.6761 97.7042 14.5088 98.0945 14.5088C98.3919 14.5088 98.7078 14.5738 99.0424 14.7039C99.377 14.8526 99.6929 15.0478 99.9903 15.2894C100.288 15.5496 100.548 15.847 100.771 16.1816C100.994 16.5161 101.133 16.8693 101.189 17.241C101.319 18.0588 101.329 18.6443 101.217 18.9974C101.124 19.332 101.022 19.5736 100.91 19.7223C100.855 19.7781 100.78 19.8431 100.687 19.9175C100.594 19.9918 100.492 20.0476 100.381 20.0848C100.269 20.1405 100.167 20.1405 100.074 20.0848C99.981 20.0476 99.9253 19.9454 99.9067 19.7781C99.8137 19.1461 99.6836 18.5978 99.5163 18.1332C99.3305 17.6871 99.0703 17.4362 98.7357 17.3804C98.6428 17.5105 98.5127 17.8265 98.3454 18.3283C98.1595 18.8116 97.8993 19.6573 97.5648 20.8654C97.1744 22.2966 96.8771 23.5605 96.6726 24.6571C96.4867 25.7723 96.3938 26.8224 96.3938 27.8075C96.3938 28.6067 96.4403 29.1643 96.5332 29.4803C96.6447 29.7963 96.7469 29.9543 96.8399 29.9543C96.8399 29.9543 96.8863 29.9357 96.9793 29.8985C97.0722 29.8613 97.2116 29.7126 97.3975 29.4524C97.5834 29.1922 97.7971 28.7926 98.0387 28.2536C98.2803 27.7146 98.5591 26.9525 98.8751 25.9674C99.0424 25.4842 99.1911 25.0381 99.3212 24.6292C99.4513 24.2203 99.5628 23.8393 99.6557 23.4861C99.7301 23.133 99.8045 22.7891 99.8788 22.4546C99.9346 22.12 99.9903 21.7669 100.046 21.3951C100.083 21.1907 100.083 21.0513 100.046 20.9769C99.9903 20.9026 100.009 20.8096 100.102 20.6981C100.176 20.6052 100.26 20.5587 100.353 20.5587C100.446 20.5587 100.511 20.5587 100.548 20.5587C100.604 20.5587 100.669 20.5587 100.743 20.5587C100.836 20.5773 100.901 20.5866 100.938 20.5866C101.05 20.5866 101.143 20.6145 101.217 20.6702C101.291 20.7446 101.384 20.7911 101.496 20.8096C101.607 20.8468 101.691 20.884 101.747 20.9212C101.821 20.9583 101.895 21.0048 101.97 21.0606C102.063 21.0791 102.165 21.1163 102.276 21.1721C102.351 21.2278 102.425 21.2929 102.5 21.3672C102.555 21.4416 102.555 21.5345 102.5 21.646C102.276 22.4267 102.081 23.2817 101.914 24.211C101.765 25.0474 101.663 25.8001 101.607 26.4693C101.533 27.1198 101.496 27.7889 101.496 28.4766C101.496 29.0156 101.57 30.3539 101.719 32.4913C103.466 32.3426 104.73 32.2683 105.511 32.2683ZM95.3344 45.0094C98.271 45.0094 99.7394 42.6954 99.7394 38.0673C99.7394 38.0116 99.7301 37.8071 99.7115 37.454C99.6743 37.0822 99.6279 36.3295 99.5721 35.1957C98.1967 35.2329 97.1094 35.4094 96.3102 35.7254C94.8976 36.3016 93.643 37.0358 92.5464 37.9279C91.3382 38.9316 90.7342 39.9167 90.7342 40.8832C90.7342 41.9798 91.1988 42.9277 92.1282 43.7269C93.0947 44.5819 94.1634 45.0094 95.3344 45.0094ZM114.572 17.7428C114.906 17.7428 115.064 17.8358 115.045 18.0216C115.008 18.2261 114.99 18.4863 114.99 18.8023C114.99 18.8395 114.99 18.9231 114.99 19.0532C114.971 19.1647 114.934 19.3227 114.878 19.5272C114.822 19.7316 114.757 20.0197 114.683 20.3914C114.609 20.7632 114.497 21.2185 114.348 21.7576C113.847 23.7649 113.308 25.5306 112.731 27.0547C112.453 27.8168 112.174 28.4673 111.895 29.0063C111.616 29.5268 111.347 29.9728 111.087 30.3446C110.399 31.3297 109.516 31.8222 108.438 31.8222C107.248 31.8222 106.226 31.1996 105.371 29.9543C104.59 28.7833 104.2 27.3614 104.2 25.6886C104.2 24.3504 104.293 22.9843 104.479 21.5903C104.683 20.2149 104.934 18.9789 105.232 17.8822C105.343 17.4919 105.473 17.0923 105.622 16.6834C105.752 16.2745 105.929 15.8935 106.152 15.5403C106.356 15.1872 106.589 14.8991 106.849 14.6761C107.109 14.453 107.416 14.3415 107.769 14.3415C108.512 14.3415 109.191 14.611 109.804 15.15C110.101 15.4474 110.334 15.8005 110.501 16.2095C110.687 16.6369 110.78 16.9994 110.78 17.2968C110.78 17.8172 110.733 18.3934 110.64 19.0253C110.529 19.6573 110.399 20.2799 110.25 20.8933C110.083 21.4881 109.906 22.0457 109.72 22.5661C109.516 23.0679 109.312 23.4768 109.107 23.7928C108.977 24.0158 108.791 24.2482 108.549 24.4898C108.326 24.7314 108.085 24.9173 107.825 25.0474C107.583 25.1961 107.351 25.2797 107.128 25.2983C106.905 25.2983 106.719 25.1961 106.57 24.9916C106.514 25.1961 106.505 25.4749 106.542 25.828C106.561 26.1626 106.598 26.4879 106.654 26.8038C106.709 27.1384 106.774 27.4451 106.849 27.7239C106.923 28.0212 106.988 28.235 107.044 28.3651C107.248 28.7926 107.518 29.1179 107.852 29.3409C108.187 29.5639 108.419 29.6755 108.549 29.6755C108.81 29.6755 109.07 29.4803 109.33 29.09C109.572 28.6997 109.888 28.2071 110.278 27.6123C110.724 26.9061 111.217 25.921 111.756 24.6571C112.313 23.3746 112.806 22.0085 113.233 20.5587C113.326 20.2613 113.401 19.9825 113.456 19.7223C113.531 19.4435 113.605 19.1554 113.679 18.858C113.809 18.1146 114.107 17.7428 114.572 17.7428ZM108.438 16.9065C108.233 17.4826 108.048 18.0031 107.88 18.4677C107.713 18.9138 107.546 19.3506 107.378 19.7781C107.23 20.2056 107.1 20.6424 106.988 21.0884C106.895 21.5345 106.83 22.0271 106.793 22.5661C107.146 22.5475 107.444 22.3152 107.685 21.8691C107.927 21.423 108.085 21.0234 108.159 20.6702C108.271 20.1498 108.382 19.6201 108.494 19.0811C108.624 18.5421 108.689 17.9938 108.689 17.4362C108.689 17.3061 108.67 17.1388 108.633 16.9343C108.577 16.7485 108.512 16.7392 108.438 16.9065ZM123.66 17.8544C123.772 17.8544 123.948 17.9101 124.19 18.0216C124.432 18.1518 124.553 18.4863 124.553 19.0253C124.553 19.9361 124.014 22.1107 122.936 25.5492C122.489 26.8503 122.099 27.8911 121.765 28.6718C121.411 29.4524 121.105 30.0472 120.845 30.4561C120.566 30.8836 120.315 31.1624 120.092 31.2925C119.869 31.4226 119.664 31.4877 119.478 31.4877C118.419 31.4877 117.555 30.8836 116.886 29.6755C116.774 29.5454 116.672 29.2851 116.579 28.8948C116.486 28.5045 116.412 27.8261 116.356 26.8596V23.8764V20.503C116.356 20.4472 116.309 20.3264 116.216 20.1405C116.105 19.9361 115.817 19.6851 115.352 19.3878C115.203 20.2056 114.887 21.423 114.404 23.04C114.404 23.1144 114.33 23.3095 114.181 23.6255C114.125 23.737 114.088 23.8207 114.07 23.8764C114.033 23.9136 114.005 23.9508 113.986 23.988C113.986 24.0809 113.921 24.1738 113.791 24.2668C113.661 24.3969 113.503 24.4154 113.317 24.3225L112.731 24.1831C112.453 24.0716 112.313 23.8857 112.313 23.6255C112.313 23.6069 112.313 23.5605 112.313 23.4861C112.313 23.4304 112.332 23.3188 112.369 23.1516C112.406 22.9843 112.462 22.7426 112.536 22.4267C112.611 22.1107 112.731 21.6832 112.899 21.1442C113.233 19.8617 113.401 18.8302 113.401 18.0495C113.401 17.9938 113.391 17.873 113.373 17.6871C113.336 17.4826 113.252 17.2038 113.122 16.8507C112.862 16.2187 112.731 15.6519 112.731 15.15C112.731 14.611 112.787 14.1742 112.899 13.8397C112.992 13.5051 113.122 13.2356 113.289 13.0311C113.438 12.8453 113.614 12.7059 113.819 12.6129C114.005 12.5386 114.19 12.5014 114.376 12.5014C114.488 12.5014 114.618 12.52 114.767 12.5572C114.915 12.5944 115.064 12.678 115.213 12.8081C115.361 12.9382 115.492 13.1334 115.603 13.3936C115.715 13.6352 115.789 13.9512 115.826 14.3415C115.845 14.6017 115.817 15.0571 115.742 15.7076C115.687 16.0793 115.659 16.3489 115.659 16.5161C115.659 16.702 115.659 16.8507 115.659 16.9622C115.696 17.018 115.798 17.1109 115.966 17.241C116.151 17.3711 116.532 17.5756 117.109 17.8544C118.521 18.5235 119.227 19.3971 119.227 20.4751C119.227 20.5308 119.218 20.6238 119.2 20.7539C119.181 20.9026 119.172 21.1163 119.172 21.3951C119.153 21.6925 119.116 22.0828 119.06 22.5661C119.004 23.0679 118.939 23.7092 118.865 24.4898C118.809 25.0288 118.763 25.4842 118.726 25.8559C118.688 26.2276 118.661 26.525 118.642 26.7481C118.605 26.9897 118.586 27.1849 118.586 27.3335C118.568 27.5008 118.558 27.6588 118.558 27.8075C118.558 28.4394 118.623 28.8298 118.754 28.9785C118.884 29.1272 119.014 29.2015 119.144 29.2015C119.162 29.1829 119.218 29.1179 119.311 29.0063C119.404 28.8762 119.525 28.6625 119.674 28.3651C119.804 28.0677 119.971 27.6681 120.175 27.1663C120.361 26.6644 120.603 26.0046 120.9 25.1868C121.774 22.6404 122.322 20.6795 122.545 19.3041C122.62 18.7094 122.768 18.319 122.991 18.1332C123.233 17.9473 123.456 17.8544 123.66 17.8544ZM127.452 29.3688C126.783 30.8185 125.947 31.5434 124.943 31.5434C124.608 31.5434 124.246 31.4598 123.856 31.2925C123.447 31.1066 123.056 30.7163 122.685 30.1215C122.462 29.6755 122.285 29.1829 122.155 28.6439C122.025 28.1049 121.96 27.5008 121.96 26.8317C121.96 26.2555 122.071 24.6942 122.294 22.1479C122.424 20.9026 122.517 19.8989 122.573 19.1368C122.629 18.3562 122.657 17.8358 122.657 17.5756C122.657 17.3154 122.657 17.1202 122.657 16.9901C122.657 16.86 122.694 16.767 122.768 16.7113C122.843 16.6741 122.982 16.6648 123.186 16.6834C123.372 16.702 123.66 16.7578 124.051 16.8507C124.776 16.9808 125.24 17.1481 125.445 17.3525C125.631 17.557 125.723 17.7336 125.723 17.8822C125.723 17.9752 125.705 18.096 125.668 18.2447C125.631 18.3934 125.584 18.5607 125.528 18.7465C125.491 18.9324 125.454 19.0997 125.417 19.2484C125.361 19.4156 125.333 19.5272 125.333 19.5829C125.296 19.7874 125.231 20.1591 125.138 20.6981C125.045 21.2557 124.934 21.8319 124.803 22.4267C124.636 23.2631 124.525 24.0251 124.469 24.7128C124.395 25.4005 124.357 26.1347 124.357 26.9153C124.357 27.0455 124.367 27.222 124.385 27.4451C124.404 27.6867 124.432 27.9283 124.469 28.1699C124.506 28.4302 124.571 28.6439 124.664 28.8112C124.757 28.997 124.878 29.1086 125.026 29.1457C125.082 29.1086 125.184 28.9785 125.333 28.7554C125.5 28.5324 125.714 28.0863 125.974 27.4172C126.03 27.2685 126.207 26.841 126.504 26.1347C126.82 25.4284 127.173 24.4526 127.564 23.2073C127.694 22.7798 127.861 22.2687 128.065 21.6739C128.288 21.0791 128.511 20.3636 128.735 19.5272C128.772 19.4342 128.809 19.3041 128.846 19.1368C128.902 18.951 128.967 18.7837 129.041 18.635C129.134 18.4863 129.246 18.3562 129.376 18.2447C129.506 18.1332 129.673 18.0774 129.878 18.0774C129.952 18.0774 130.045 18.1425 130.156 18.2726C130.287 18.3841 130.352 18.7094 130.352 19.2484C130.352 19.3785 130.333 19.555 130.296 19.7781C130.277 20.0011 130.212 20.345 130.101 20.8096C130.008 21.2557 129.859 21.8319 129.655 22.5382C129.469 23.2445 129.199 24.1459 128.846 25.2425C128.493 26.4135 128.205 27.3242 127.982 27.9748C127.759 28.6439 127.582 29.1086 127.452 29.3688ZM125.026 15.1221C124.357 15.1221 123.828 14.8619 123.437 14.3415C123.01 13.8397 122.796 13.3285 122.796 12.8081C122.796 12.3806 123.01 11.9531 123.437 11.5256C123.902 11.1167 124.32 10.9123 124.692 10.9123C125.305 10.9123 125.779 11.0888 126.114 11.442C126.467 11.8137 126.644 12.3341 126.644 13.0033C126.644 13.4865 126.578 13.8675 126.448 14.1463C126.337 14.4251 126.188 14.6389 126.002 14.7876C125.816 14.9363 125.64 15.0292 125.473 15.0664C125.287 15.1035 125.138 15.1221 125.026 15.1221ZM138.548 17.7428C138.883 17.7428 139.032 17.8358 138.994 18.0216C138.976 18.2261 138.966 18.4863 138.966 18.8023C138.966 18.8395 138.957 18.9231 138.939 19.0532C138.939 19.1647 138.911 19.3227 138.855 19.5272C138.799 19.7316 138.734 20.0197 138.66 20.3914C138.585 20.7632 138.465 21.2185 138.297 21.7576C137.814 23.7649 137.284 25.5306 136.708 27.0547C136.411 27.8168 136.132 28.4673 135.872 29.0063C135.593 29.5268 135.323 29.9728 135.063 30.3446C134.357 31.3297 133.474 31.8222 132.415 31.8222C131.207 31.8222 130.175 31.1996 129.32 29.9543C128.539 28.7833 128.149 27.3614 128.149 25.6886C128.149 24.3504 128.251 22.9843 128.456 21.5903C128.642 20.2149 128.893 18.9789 129.208 17.8822C129.32 17.4919 129.441 17.0923 129.571 16.6834C129.72 16.2745 129.896 15.8935 130.101 15.5403C130.305 15.1872 130.537 14.8991 130.798 14.6761C131.058 14.453 131.374 14.3415 131.746 14.3415C132.47 14.3415 133.149 14.611 133.781 15.15C134.06 15.4474 134.292 15.8005 134.478 16.2095C134.664 16.6369 134.757 16.9994 134.757 17.2968C134.757 17.8172 134.701 18.3934 134.589 19.0253C134.496 19.6573 134.366 20.2799 134.199 20.8933C134.05 21.4881 133.874 22.0457 133.669 22.5661C133.483 23.0679 133.288 23.4768 133.084 23.7928C132.954 24.0158 132.768 24.2482 132.526 24.4898C132.285 24.7314 132.043 24.9173 131.801 25.0474C131.56 25.1961 131.327 25.2797 131.104 25.2983C130.881 25.2983 130.695 25.1961 130.547 24.9916C130.491 25.1961 130.472 25.4749 130.491 25.828C130.528 26.1626 130.565 26.4879 130.602 26.8038C130.658 27.1384 130.723 27.4451 130.798 27.7239C130.891 28.0212 130.956 28.235 130.993 28.3651C131.216 28.7926 131.495 29.1179 131.829 29.3409C132.164 29.5639 132.396 29.6755 132.526 29.6755C132.786 29.6755 133.037 29.4803 133.279 29.09C133.539 28.6997 133.864 28.2071 134.255 27.6123C134.682 26.9061 135.175 25.921 135.732 24.6571C136.271 23.3746 136.764 22.0085 137.21 20.5587C137.284 20.2613 137.359 19.9825 137.433 19.7223C137.489 19.4435 137.554 19.1554 137.628 18.858C137.758 18.1146 138.065 17.7428 138.548 17.7428ZM132.415 16.9065C132.21 17.4826 132.024 18.0031 131.857 18.4677C131.671 18.9138 131.504 19.3506 131.355 19.7781C131.207 20.2056 131.076 20.6424 130.965 21.0884C130.853 21.5345 130.788 22.0271 130.77 22.5661C131.104 22.5475 131.402 22.3152 131.662 21.8691C131.904 21.423 132.062 21.0234 132.136 20.6702C132.247 20.1498 132.359 19.6201 132.47 19.0811C132.582 18.5421 132.638 17.9938 132.638 17.4362C132.638 17.3061 132.619 17.1388 132.582 16.9343C132.545 16.7485 132.489 16.7392 132.415 16.9065Z"
                      fill="black"
                    />
                  </svg>
                </div>
                <div className="li--underline li--underline-1">
                  {/* <span>
                    <img
                      className="img--underline-1"
                      alt="red paint line"
                      src={require('../assets/red-paint-brush-stroke.png')}
                    />
                  </span> */}
                </div>
              </Link>
            </li>
          </div>
          <div
            className={`navbar--items ${isActive ? 'hide--nav' : 'show--nav'}`}
          >
            <li>
              <Link to="about" onClick={() => setActive(false)}>
                <strong>À propos</strong>
                <div className="li--underline li--underline-2">
                  {/* <span>
                    <img
                      className="img--underline-2"
                      alt="red paint line"
                      src={require('../assets/red-paint-brush-stroke.png')}
                    />
                  </span> */}
                </div>
              </Link>
            </li>
            <li>
              <Link to="paintings" onClick={() => setActive(false)}>
                <strong>Tableaux</strong>
                <div className="li--underline li--underline-3">
                  {/* <span>
                    <img
                      className="img--underline-3"
                      alt="red paint line"
                      src={require('../assets/red-paint-brush-stroke.png')}
                    />
                  </span> */}
                </div>
              </Link>
            </li>
            <li>
              <Link to="contact" onClick={() => setActive(false)}>
                <strong>Contact</strong>
                <div className="li--underline li--underline-4">
                  {/* <span>
                    <img
                      className="img--underline-4"
                      alt="red paint line"
                      src={require('../assets/red-paint-brush-stroke.png')}
                    />
                  </span> */}
                </div>
              </Link>
            </li>
          </div>
        </ul>
        <img
          className={`img--splash-nav ${
            isActive ? 'rotate--img' : 'rotate--img-2'
          }`}
          onClick={toggleCLass}
          alt="black paint splash"
          src={require('../assets/black.png')}
        />
      </nav>
      <main className="content">
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default Layout;