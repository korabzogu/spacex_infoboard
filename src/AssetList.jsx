import React, { useEffect } from 'react';
import { getAllPayloads } from './redux/ducks/payloads'
import { getAllStarlink } from './redux/ducks/starlink'
import { getAllCrew } from './redux/ducks/crew'
import { getAllDragons } from './redux/ducks/dragons'
import { getAllRockets } from './redux/ducks/rockets'
import { useDispatch, useSelector} from 'react-redux'

import './AssetList.css';

import { Button, Card, List, Text } from '@arwes/core'
import { FrameHexagon } from '@arwes/core/lib/FrameHexagon/FrameHexagon.component';

const AssetList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllPayloads())
  }, [dispatch]);

  const payloads = useSelector((state) => state.payload.payloads);
  var payloadsCount = payloads && payloads.length;
 
  useEffect(() => {
    dispatch(getAllStarlink())
  }, [dispatch]);

  const starlink = useSelector((state) => state.starlink.starlink);
  var starlinkCount = starlink && starlink.length;
  console.log(starlink)

  useEffect(() => {
    dispatch(getAllCrew())
  }, [dispatch]);

  const crew = useSelector((state) => state.crew.crew);
  var crewCount = crew && crew.length;

  useEffect(() => {
    dispatch(getAllDragons())
  }, [dispatch]);

  const dragons = useSelector((state) => state.dragons.dragons);
  var dragonsCount = dragons && dragons.length;

  useEffect(() => {
    dispatch(getAllRockets())
  }, [dispatch]);

  const rockets = useSelector((state) => state.rockets.rockets);
  var rocketsCount = rockets && rockets.length;

  var combinedMass = 0;
  rockets && rockets.forEach(e => combinedMass += parseInt(e.mass.kg))

    return (

        <React.Fragment>
            <div id="wrapper">
            <div id="left">
            <div>
                <Button 
                id='payload-button'
                class='accordion_button' 
                onClick={()=>{var e = document.getElementById('payload-list');
                if(e.style.display === 'block') {
                    e.style.display ='none';
                } else {
                    e.style.display = 'block';
                }
                    console.log(this)
                }}
                >
                    Payloads ({payloadsCount})
                </Button>
                <ul class='accordion_list' id='payload-list'>
                    {payloads && payloads.map((payload) => {
                        return <li onMouseOver={()=>{console.log(payload)}} > {payload.name} </li>
                    })}
                </ul>
            </div>

            <div>
                <Button 
                id='starlink-button'
                class='accordion_button' 
                onClick={()=>{var e = document.getElementById('starlink-list');
                if(e.style.display === 'block') {
                    e.style.display ='none';
                } else {
                    e.style.display = 'block';
                }
                }}
                >Starlink ({starlinkCount}) 
                </Button>
                <ul class='accordion_list' id='starlink-list'>
                {starlink && starlink.map((e) => {
                    return <li> {e.spaceTrack.OBJECT_NAME} </li>
                })}
                </ul>
            </div>

            <div>
                <Button 
                id='crew-button'
                class='accordion_button' 
                onClick={()=>{var e = document.getElementById('crew-list');
                if(e.style.display === 'block') {
                    e.style.display ='none';
                } else {
                    e.style.display = 'block';
                }
                }}
                >Crew ({crewCount}) 
                </Button>
                <ul class='accordion_list' id='crew-list'>
                {crew && crew.map((e) => {

                    return <li> {e.name} </li>
                })}
                </ul>
            </div>

            <div>
                <Button 
                id='dragons-button'
                class='accordion_button' 
                onClick={()=>{var e = document.getElementById('dragons-list');
                if(e.style.display === 'block') {
                    e.style.display ='none';
                } else {
                    e.style.display = 'block';
                }
                }}
                >Dragons ({dragonsCount}) 
                </Button>
                <ul class='accordion_list' id='dragons-list'>
                {dragons && dragons.map((e) => {

                    return <li> {e.name} </li>
                })}
                </ul>
            </div>

            <div>
                <Button 
                id='rockets-button'
                class='accordion_button' 
                onClick={()=>{var e = document.getElementById('rockets-list');
                if(e.style.display === 'block') {
                    e.style.display ='none';
                } else {
                    e.style.display = 'block';
                }
                }}
                >Rockets ({rocketsCount}) 
                </Button>
                <ul class='accordion_list' id='rockets-list'>
                {rockets && rockets.map((e) => {

                    return <li> {e.name} </li>
                })}
                </ul>
            </div>

            </div>

            <div id="right">

            
            <Card
                title='Rockets Fact'>
                    <Text>The combined mass of all SpaceX Rockets is {combinedMass} kg. This corresponds 
                      to the weight of {(combinedMass/2800000).toFixed(2)} Saturn V Rockets
                    or {(combinedMass/2000000).toFixed(2)} Space Shuttles
                    </Text>
            </Card>

            {crew && crew.map((e) => {
                    return <Card
                    image={{ src: e.image}} 
                    title={e.name} 

                    ><Text>
                        <p>Agency: {e.agency}</p>
                        <p>Status: {e.status}</p>
                       
                        
                        <Button palette='secondary'
                        onClick={() => window.open(e.wikipedia, "_blank")}
                        >
                            Wikipedia
                            </Button>
                    </Text>
                                      </Card>
                })}

            {dragons && dragons.map((e) => {
                    return <Card
                    image={{ src: e.flickr_images[Math.floor(Math.random()*e.flickr_images.length)]}} 
                    title={e.name} 

                    ><Text>
                        <p>Mass: {e.dry_mass_kg} kg</p>
                        <p>Type: {e.type}</p>
                        
                        <Button palette='secondary'
                        onClick={() => window.open(e.wikipedia, "_blank")}
                        >
                            Wikipedia
                            </Button>
                    </Text>
                                      </Card>
                })}

                
            {rockets && rockets.map((e) => {
                    return <Card
                    image={{ src: e.flickr_images[Math.floor(Math.random()*e.flickr_images.length)]}} 
                    title={e.name} 

                    ><Text>
                        <p>Height: {e.height.meters} m</p>
                        <p>Mass: {e.mass.kg} kg</p>
                        <p>Cost/Launch: {e.cost_per_launch} $</p>
                    
                        <Button palette='secondary'
                        onClick={() => window.open(e.wikipedia, "_blank")}
                        >
                            Wikipedia
                            </Button>
                    </Text>
                                      </Card>
                })}

                {payloads && payloads.map((e) => {
                    return <Card
                    title={e.name} 

                    ><Text>
                        <p>Type: {e.type}</p>
                        <p>Reference system: {e.reference_system}</p>
                        <p>Reused: {e.reused ? 'Yes' : 'No' }</p>
                    </Text>
                                      </Card>
                })} 



              {/* FUN FACT CARDS */}


            </div>
            </div>
             </React.Fragment>

    )
}

export default AssetList;