import type { Project } from "../../data/portfolioData";

interface ProjectPreviewModalProps {
    isOpen: boolean;
    portfolio: Project | null;
    onClose: () => void;
}

const ProjectPreviewModal = ({
    isOpen,
    portfolio,
    onClose,
}: ProjectPreviewModalProps) => {
    if (!isOpen || !portfolio) return null;

    return (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
            <div className="bg-dark-gray rounded-lg p-6 w-full max-w-sm mx-4">
                <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-semibold text-white">
                        {portfolio.title}
                    </h3>
                    <button
                        onClick={onClose}
                        className="text-gray-500 hover:text-gray-700 text-2xl"
                    >
                        ×
                    </button>
                </div>

                <div className="space-y-3">
                    {portfolio.preview.figma && (
                        <button
                            onClick={() => window.open(portfolio.preview.figma)}
                            className="w-full rounded-full border border-light-gray text-white cursor-pointer bg-light-gray/8 transition-all hover:bg-light-gray/5 py-2 px-4 flex items-center justify-center gap-2"
                        >
                            Figma
                        </button>
                    )}

                    {portfolio.preview.website && (
                        <button
                            onClick={() => window.open(portfolio.preview.website)}
                            className="w-full rounded-full border border-light-gray text-white cursor-pointer bg-light-gray/8 transition-all hover:bg-light-gray/5 py-2 px-4 flex items-center justify-center gap-2"
                        >
                            Website
                        </button>
                    )}

                    {portfolio.preview.app && (
                        <button
                            onClick={() => window.open(portfolio.preview.app)}
                            className="w-full rounded-full border border-light-gray text-white cursor-pointer bg-light-gray/8 transition-all hover:bg-light-gray/5 py-2 px-4 flex items-center justify-center gap-2"
                        >
                            App
                        </button>
                    )}

                    {portfolio.preview.backend && (
                        <button
                            onClick={() => window.open(portfolio.preview.backend)}
                            className="w-full rounded-full border border-light-gray text-white cursor-pointer bg-light-gray/8 transition-all hover:bg-light-gray/5 py-2 px-4 flex items-center justify-center gap-2"
                        >
                            Source Code Backend
                        </button>
                    )}

                    {!portfolio.preview.figma &&
                        !portfolio.preview.website &&
                        !portfolio.preview.app && (
                            <p className="text-light-gray text-center py-4">
                                No preview links available for this project.
                            </p>
                        )}
                </div>
            </div>
        </div>
    );
};

export default ProjectPreviewModal;
