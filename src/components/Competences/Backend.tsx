import React from 'react';
import ScrollAnimation from '../ScrollAnimation.tsx';
import { ReactComponent as Java } from '../../assets/techno/Java.svg';
import { ReactComponent as Maven } from '../../assets/techno/Maven.svg';
import { ReactComponent as Spring } from '../../assets/techno/Spring.svg';
import { ReactComponent as Python } from '../../assets/techno/Python.svg';
import { ReactComponent as Numpy } from '../../assets/techno/Numpy.svg';
import { ReactComponent as NetworkX } from '../../assets/techno/NetworkX.svg';
import { ReactComponent as C } from '../../assets/techno/C.svg';
import { ReactComponent as Cpp } from '../../assets/techno/Cpp.svg';
import { ReactComponent as Bash } from '../../assets/techno/Bash.svg';
import { ReactComponent as MySQL } from '../../assets/techno/MySQL.svg';
import { ReactComponent as PostgreSQL } from '../../assets/techno/PostgreSQL.svg';
import { ReactComponent as MongoDB } from '../../assets/techno/MongoDB.svg';
import { ReactComponent as ElasticSearch } from '../../assets/techno/Elasticsearch.svg';
import { ReactComponent as Firebase } from '../../assets/techno/Firebase.svg';
import { ReactComponent as Postman } from '../../assets/techno/Postman.svg';
import { ReactComponent as Swagger } from '../../assets/techno/Swagger.svg';
import { ReactComponent as Insomnia } from '../../assets/techno/Insomnia.svg';
import CustomTooltip from '../CustomTooltip.tsx';

const Backend = () => {
    return (
      <ScrollAnimation translateX={0} translateY={100} speed="0.3s">
        <div className="competence-box backend">
            <h1>Backend</h1>
            <div className='techno-competences'>

              <ScrollAnimation translateX={0} translateY={100} speed="0.35s">
                <CustomTooltip title="Java">
                  <Java className="icon"/>
                </CustomTooltip>
              </ScrollAnimation>
                
              <ScrollAnimation translateX={0} translateY={100} speed="0.4s">
                <CustomTooltip title="Maven">
                  <Maven className="icon"/>
                </CustomTooltip>
              </ScrollAnimation>

              <ScrollAnimation translateX={0} translateY={100} speed="0.45s">
                <CustomTooltip title="Spring">
                  <Spring className="icon"/>
                </CustomTooltip>
              </ScrollAnimation>
                
              <ScrollAnimation translateX={0} translateY={100} speed="0.5s">
                <CustomTooltip title="Python">
                  <Python className="icon"/>
                </CustomTooltip>
              </ScrollAnimation>

              <ScrollAnimation translateX={0} translateY={100} speed="0.55s">
                <CustomTooltip title="Bash">
                  <Bash className="icon"/>
                </CustomTooltip>
              </ScrollAnimation>

              <ScrollAnimation translateX={0} translateY={100} speed="0.6s">
                <CustomTooltip title="MySQL">
                  <MySQL className="icon"/>
                </CustomTooltip>
              </ScrollAnimation>

              <ScrollAnimation translateX={0} translateY={100} speed="0.65s">
                <CustomTooltip title="PostgreSQL">
                  <PostgreSQL className="icon"/>
                </CustomTooltip> 
              </ScrollAnimation>

              <ScrollAnimation translateX={0} translateY={100} speed="0.7s">
                <CustomTooltip title="MongoDB">
                  <MongoDB className="icon"/>
                </CustomTooltip>
              </ScrollAnimation>

              <ScrollAnimation translateX={0} translateY={100} speed="0.75s">
                <CustomTooltip title="ElasticSearch">
                  <ElasticSearch className="icon"/>
                </CustomTooltip>
              </ScrollAnimation>

              <ScrollAnimation translateX={0} translateY={100} speed="0.8s">
                <CustomTooltip title="Firebase">
                  <Firebase className="icon"/>
                </CustomTooltip>
              </ScrollAnimation>

              <ScrollAnimation translateX={0} translateY={100} speed="0.85s">
                <CustomTooltip title="Postman">
                  <Postman className="icon"/>
                </CustomTooltip>
              </ScrollAnimation>

              <ScrollAnimation translateX={0} translateY={100} speed="0.9s">
                <CustomTooltip title="Swagger">
                  <Swagger className="icon"/>
                </CustomTooltip>
              </ScrollAnimation>

              <ScrollAnimation translateX={0} translateY={100} speed="0.95s">
                <CustomTooltip title="Insomnia">
                  <Insomnia className="icon"/>
                </CustomTooltip>
              </ScrollAnimation>
            </div>
        </div>
      </ScrollAnimation>
    );
};

export default Backend;
