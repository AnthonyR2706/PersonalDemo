import { React, useState } from 'react'
import { Home, Projects, Footer } from './components'
import Preview from './components/Preview'
import SessionTimer from './assets/SessionTimer.png'
import DrumMachine from './assets/DrumMachine.png'
import RandomQuote from './assets/RandomQuote.png'
import MarkdownPreview from './assets/MarkdownPreview.png'
import Calculator from './assets/Calculator.png'
import PaymentTracker from './assets/PaymentTracker.png'

const App = () => {

    const [getTab, setTab] = useState('home')
    const [getProjectTab, setProjectTab] = useState(0)
    const PROJECT = [
        {
            preview: <Preview 
                        img={PaymentTracker}
                        link="https://anthonyr2706.github.io/PaymentTracker/"
                        gLink="https://github.com/AnthonyR2706/PaymentTracker"
                    />,
            title: "Payment Tracker",
            description: "Allows users to create accounts and access their own payment trackers. They can then add, delete, and edit entries. The entries are stored on MongoDB"
        },
        {
            preview: <Preview 
                        img={SessionTimer}
                        link="https://anthonyr2706.github.io/SessionTimer/"
                        gLink="https://github.com/AnthonyR2706/SessionTimer"
                    />,
            title: "Session Timer",
            description: "Allows the user to set a timer for up to an hour. The timer will cycle between a session and break allowing the user to use the Pomodoro Technique"
        },
        {
            preview: <Preview 
                        img={DrumMachine}
                        link="https://anthonyr2706.github.io/DrumMachine/"
                        gLink="https://github.com/AnthonyR2706/DrumMachine"
                    />,
            title: "Drum Machine",
            description: "A sound board that can be used to play music. It has two sets of sounds that can be toggled between along with a functional power button and volume silder. The user may also use the indicated keyboard keys to play the sounds",
        },
        {
            preview: <Preview 
                        img={RandomQuote}
                        link="https://anthonyr2706.github.io/Random-Quote/"
                        gLink="https://github.com/AnthonyR2706/Random-Quote"
                    />,
            title: "Random Quote",
            description: "Generates a random quote with every click of the button. The background will alos switch with every new quote. A tweet button is included that creates a prefilled tweet for those who want to sharet heir quote",
        },
        {
            preview: <Preview 
                        img={MarkdownPreview}
                        link="https://anthonyr2706.github.io/MarkdownPreview/"
                        gLink="https://github.com/AnthonyR2706/MarkdownPreview"
                    />,
            title: "Markdown Preview",
            description: "A way for users to preview their markdown text. The preview is updated in real time as the user types in the editor. The editor is resizable and both containers can be expanded to fill the screen",
        },
        {
            preview: <Preview 
                        img={Calculator}
                        link="https://anthonyr2706.github.io/Calculator/"
                        gLink="https://github.com/AnthonyR2706/Calculator"
                    />,
            title: "Calculator",
            description: "A simple javascript calculator. It allows for the basic mathematical functions. The user can then continue to preform mathematical functions using the previous result as a base",
        },
        ]
    const [getProject, setProject] = useState(PROJECT[0].preview)
    const TABS = {
        home: <Home />,
        projects: <Projects PROJECT={PROJECT} getProjectTab={getProjectTab} setProjectTab={setProjectTab} getProject={getProject} setProject={setProject}/>
        }
    document.title = 'Anthony Ramanovich';
    
    return (
        <div className='app__wrapper'>
            <div className='navBar'>
                <div className='navBarText'>
                    Anthony Ramanovich
                </div>
                <div className='navBarTabContainer'>
                    <div className='navBarTab projectTabButton' href="#projects" onClick={() => setTab("projects")}>
                        Projects
                    </div>
                    <div className='navBarTab homTabButton' href="#home" onClick={() => setTab("home")}>
                        Home
                    </div>
                </div>
            </div>
            <div className='contentContainer'>
                {TABS[getTab]}
            </div>
            <Footer/>
        </div>
    )
}

export default App
