import { useRef } from 'react';

export default function UseRefScrolImage() {
  const listRef = useRef(null);

  function scrollToIndex(index) {
    const listNode = listRef.current;
    // This line assumes a particular DOM structure:
    const imgNode = listNode.querySelectorAll('li > img')[index];
    imgNode.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'center'
    });
  }

  return (
    <>
      <nav>
        <button onClick={() => scrollToIndex(0)}>
          Tom
        </button>
        <button onClick={() => scrollToIndex(1)}>
          Maru
        </button>
        <button onClick={() => scrollToIndex(2)}>
          Jellylorum
        </button>
      </nav>
      <div>
        <ul ref={listRef}>
          <li>
            <img
              src="./flower1.jpg"
              alt="Tom"
            />
          </li>
          <li>
            <img
              src="./flower2.jpg"
              alt="Maru"
            />
          </li>
          <li>
            <img
              src="./flower3.jpg"
              alt="Jellylorum"
            />
          </li>
        </ul>
      </div>
    </>
  );
}
