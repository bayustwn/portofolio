import ActionBar from "../ui/actionBar";
import { certifications } from "../../data/portfolioData";

interface CertificationProps {
    handleImageClick: (imageSrc: string) => void;
}

const Certification = ({ handleImageClick }: CertificationProps) => {
    return (
        <div className="border border-light-gray/40 h-fit p-5 rounded-lg">
            <ActionBar />
            <h1 className="text-light-gray mt-5">
                ~$ Bayu Setiawan/ <span className="text-light-blue">Certification</span>
                <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-3">
                    {certifications.map((cert, index) => {
                        return (
                            <img
                                className="object-cover rounded-lg hover:scale-95 transform transition-all cursor-pointer"
                                key={index}
                                src={`/cert/${cert}`}
                                alt="cert"
                                onClick={() => handleImageClick(`/cert/${cert}`)}
                            />
                        );
                    })}
                </div>
            </h1>
        </div>
    );
};

export default Certification;
