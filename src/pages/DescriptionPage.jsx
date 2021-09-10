import '../styles/description.styles.scss'
const DescriptionPage = () => {
  return (
    <div className="description-page">
      <article>
        <h1>Iceland Earthquakes Project</h1>
        <p>Sammie Benton</p>
      </article>
      <article>
        <h1>First of All</h1>
        <p>I'd like to thank you all for your consideration and I really am enjoying this project.  I look forward to finishing this and getting all of the bugs out until this is a production ready project.  Given the time, and busy week I've had at my current position, I haven't had time to really dig in and create a polished feature rich solution as I had planned.</p>
      </article>
      <article>
        <h1>Basic requirements:</h1>
        <ul>
          <li>Setup a react project and think about a structure that is easy to reason about.</li>
          <li>Be able to fetch data from the API to use in your components.</li>
          <li>Refetch the data periodally (Have the refresh time configurable in the UI).</li>
          <li>Decide on state management to support your application architecture moving forward.</li>
          <li>Visualize earthquakes using a table with data sorted by date (newest is the most recent one) and use your imagination to give users more insights into the data. </li>
        </ul>
        <h1>Extra points ideas:</h1>
        <ul>
          <li>Be able to sort the table, using a global state rather the local state, to persist configuration when rerendering your components.</li>
          <li>Find a way to visualize the data (for example on a map, or as a graph)</li>
          <li>Dark mode, detect operating system settings.</li> 
        </ul>
      </article>
      <article>
        <h1>How I built this project</h1>
        <ol>
          <li>created a boilerplate react project via CRA</li>
          <li>created a "QuakeDataContext" with the help of axios to connect to the endpoint "https://apis.is/earthquake/is"</li>
          <li>created a table from the table on the earthquakes page to show the data on a table</li>
          <li>created a graph page to show the data in different types graphs as well as show the order of the table remaining in a persistent state while navigating through different pages and graphs</li>
          <li>created a ThemeContext button that toggles between the sun and moon on press and also toggles the theme.  <strong>not complete</strong></li>
          <li>added react-bootstrap and font-awesome for icons for visual shortcuts</li>
          <li>added node-sass to use scss</li>
          <li>created a few resuable components both for display, but didn't need to reuse any because this is a small site</li>
          <li>Created a SortByButtons component to use through the application and be able to toggle the data from any page via the context <strong>not complete</strong></li>
        </ol>
      </article>
      <article>
        <h1>Bugs in my code I discovered</h1>
        <ol>
          <li>Sorting does not update the component immediately.  It's takes a few clicks and navigating to another tab and back to see the table sorted.  <strong>I needed to spend more time figuring this out and possibly a useEffect or useCallback hook in the table page would have updated the component as I wanted. The setData call was not working as expected</strong></li>
          <li>The theme context does not detect the browsers them and therefore does not update the them accordingly <strong>I should have played it safe and toggled the theme, but I got stuck on trying to find the right environment to test this in chrome and found this out too late.</strong></li>
          <li>The project is in what i call "prototype mode" and not as close to production ready as I had planned or what I am capable of doing.</li>
        </ol>
      </article>
      <article>
        <h1>Things I had visioned if things would have went as planned...</h1>
        <ol>
          <li>create a card component to show while hovering over the data points in the table and graphs which would have included the information seen on the card in a more visual pattern</li>
          <li>create a map using google maps api with pins where a hover would reveal said card and show the info for that time</li>
          <li>if the data was in real time I would have added a predictable page on the chart page where it would guess the next earthquake <strong>likely to be wrong...lol</strong></li>
          <li>cleaned up the date in the table to show in a better format</li>
          <li>used more of my own styles instead of bootstrap</li>
          <li>I usually used the type library or use this as a stencil as I am still learning to write in React Typescript from scratch</li>
        </ol>
      </article>
      <article>
        <h1>Besides That...</h1>
        <p>I see where I need to grow and things that should have come to me instantly and what actually did.  As I said before I really enjoyed the project and I look forward to speaking more about your stack and where I can fit in as a member of GangVerk's team.  Thank you so much for you time</p>
      </article>
    </div>
  )
}
export default DescriptionPage