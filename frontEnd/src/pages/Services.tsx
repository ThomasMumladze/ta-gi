// =============== Component =============== //
import Button from "../components/Button";
import Title from "../components/Title";

interface Props {
    t: (key: string) => any;
}
const tempArr = Array.from({ length: 4 });

const Services = (props: Props) => {
    const { t } = props;

    return (
        <section className="services">
            <Title subtitle={t("services.pricing")} title={t("services.serviceFee")} />
            <div className="service-wrapper">
                {tempArr.map((item: any, _) => (
                    <div key={_} className="service-card">
                        <div className="service-card--header">
                            <h3>fee</h3> {item}
                        </div>
                        <div className="service-card--body">
                            <h4>
                                <sup>$</sup> 19.99
                            </h4>

                            <ul>
                                <li>Aida dere</li>
                                <li>Nec feugiat nisl</li>
                                <li>Nulla at volutpat dola</li>
                                <li>Pharetra massa</li>
                                <li>Massa ultricies mi</li>
                            </ul>
                        </div>
                        <div className="service-card--footer">
                            <Button htmlClass="service-btn" btnOnClick={() => {}}>
                                buy now
                            </Button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Services;
