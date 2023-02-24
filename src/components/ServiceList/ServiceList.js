
import ServiceItem from './ServiceItem/ServiceItem';

function ServiceList() {
    return (

        <div className="service-list">
            <ServiceItem />
            <ServiceItem />
            {/* <div className="service-item">
                <h2 className="service-title">Verslui</h2>
                <p>Esame geriausias kompanijų draugas Edutech erdvėje.</p>
                <p>Kelsime Jūsų darbuotojų kompetenciją bei atrasime talentus. 📈CodeAcademy programavimo kursai</p>
                <a className="button" href="#">Sužinok daugiau</a>
            </div> */}
        </div>
    )
}

export default ServiceList;